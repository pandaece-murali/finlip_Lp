"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

export default function PositionCalculator({ onOpenModal }: { onOpenModal?: () => void }) {
  const [capital, setCapital] = useState<number>(200000);
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [entryPrice, setEntryPrice] = useState<number>(2450);
  const [stopLoss, setStopLoss] = useState<number>(2410);
  const [targetPrice, setTargetPrice] = useState<number>(2550);

  // Math
  const riskAmount = (capital * riskPercent) / 100;
  const slDistance = Math.max(1, Math.abs(entryPrice - stopLoss));
  const targetDistance = Math.max(0, targetPrice - entryPrice);
  const maxQty = Math.floor(riskAmount / slDistance);
  const totalPositionValue = maxQty * entryPrice;
  const potentialProfit = maxQty * targetDistance;
  const riskRewardRatio = slDistance > 0 ? (targetDistance / slDistance).toFixed(2) : "0.00";

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-slate-900">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" /> Institutional Tool
          </div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Institutional Risk & Position Size Calculator
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Finlip Security rule #1: Never risk more than 1-2% of trading capital on a single setup. Test your trade parameters below.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">Trained on SEBI NISM VIII Risk Protocols</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Input Parameters */}
        <div className="lg:col-span-7 space-y-5">
          {/* Capital Slider */}
          <div>
            <div className="flex justify-between items-center text-sm font-medium mb-1.5">
              <span className="text-slate-700">Trading Capital (₹)</span>
              <span className="font-mono text-emerald-700 font-bold text-base">
                ₹{capital.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="2000000"
              step="10000"
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹20K</span>
              <span>₹10 Lakh</span>
              <span>₹20 Lakh</span>
            </div>
          </div>

          {/* Risk % Slider */}
          <div>
            <div className="flex justify-between items-center text-sm font-medium mb-1.5">
              <span className="text-slate-700">Risk Per Trade (%)</span>
              <span className="font-mono text-emerald-700 font-bold text-base">
                {riskPercent}% (₹{riskAmount.toLocaleString("en-IN")})
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.1"
              value={riskPercent}
              onChange={(e) => setRiskPercent(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0.5% (Conservative)</span>
              <span>1.5% (Recommended)</span>
              <span>5.0% (Aggressive)</span>
            </div>
          </div>

          {/* Trade Levels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs text-slate-600 font-semibold mb-1">
                Entry Price (₹)
              </label>
              <input
                type="number"
                value={entryPrice}
                onChange={(e) => setEntryPrice(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 font-mono text-sm focus:bg-white focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-600 font-semibold mb-1">
                Stop Loss (₹)
              </label>
              <input
                type="number"
                value={stopLoss}
                onChange={(e) => setStopLoss(Number(e.target.value))}
                className="w-full bg-slate-50 border border-rose-300 rounded-xl px-3 py-2 text-rose-600 font-mono text-sm focus:bg-white focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-600 font-semibold mb-1">
                Target Price (₹)
              </label>
              <input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="w-full bg-slate-50 border border-emerald-300 rounded-xl px-3 py-2 text-emerald-700 font-mono text-sm focus:bg-white focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Output Metrics Card */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Execution Blueprint
              </span>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">Valid Setup</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[11px] text-slate-500 block">Allowed Quantity</span>
                <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
                  {maxQty} Units
                </span>
                <span className="text-[10px] text-slate-400">Max shares to buy</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[11px] text-slate-500 block">Risk : Reward</span>
                <span className="text-xl font-bold font-mono text-emerald-700 mt-1 block">
                  1 : {riskRewardRatio}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {Number(riskRewardRatio) >= 2 ? "Excellent Ratio" : "Sub-optimal Ratio"}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex justify-between text-slate-600">
                <span>Total Capital Deployed:</span>
                <span className="font-mono text-slate-900 font-semibold">₹{totalPositionValue.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-rose-600 font-medium">
                <span>Maximum Loss (at SL):</span>
                <span className="font-mono">-₹{(maxQty * slDistance).toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>Potential Profit (at Target):</span>
                <span className="font-mono">+₹{potentialProfit.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 mt-4">
            <button
              onClick={() => onOpenModal && onOpenModal()}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>Learn Advanced Greeks & Sizing in Masterclass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
