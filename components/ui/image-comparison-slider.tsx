"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "motion/react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "cn";

export type ImageComparisonProps = {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  /** Подписи в углах. Передайте null, чтобы скрыть. */
  labelBefore?: string | null;
  labelAfter?: string | null;
  /** Стартовая позиция ползунка, 0..100 */
  initialPosition?: number;
  className?: string;
};

const clamp = (v: number) => Math.max(0, Math.min(100, v));

/**
 * Слайдер «до / после». Позиция хранится в motion value, поэтому
 * перетаскивание не вызывает ре-рендеров React на каждый кадр.
 */
export function ImageComparison({
  beforeImage,
  afterImage,
  altBefore = "До",
  altAfter = "После",
  labelBefore = "До",
  labelAfter = "После",
  initialPosition = 50,
  className,
}: ImageComparisonProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const position = useMotionValue(clamp(initialPosition));
  const [dragging, setDragging] = React.useState(false);
  // Значение для aria-valuenow обновляем редко (на отпускание и клавиши), не на каждый кадр.
  const [ariaValue, setAriaValue] = React.useState(Math.round(clamp(initialPosition)));

  const clipPath = useTransform(position, (p) => `inset(0 ${100 - p}% 0 0)`);
  const handleLeft = useMotionTemplate`${position}%`;

  const moveTo = React.useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      position.set(clamp(((clientX - rect.left) / rect.width) * 100));
    },
    [position],
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    moveTo(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    moveTo(e.clientX);
  };
  const endDrag = () => {
    if (!dragging) return;
    setDragging(false);
    setAriaValue(Math.round(position.get()));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2;
    let next: number | null = null;
    if (e.key === "ArrowLeft") next = position.get() - step;
    if (e.key === "ArrowRight") next = position.get() + step;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = 100;
    if (next === null) return;
    e.preventDefault();
    position.set(clamp(next));
    setAriaValue(Math.round(position.get()));
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full touch-pan-y select-none overflow-hidden rounded-2xl bg-surface",
        dragging ? "cursor-grabbing" : "cursor-ew-resize",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
    >
      {/* Нижний слой: «до» */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeImage}
        alt={altBefore}
        className="block aspect-[4/3] h-auto w-full object-cover md:aspect-[16/9]"
        draggable={false}
      />

      {/* Верхний слой: «после», обрезан clip-path по позиции ползунка */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath }}
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={altAfter}
          className="block h-full w-full object-cover"
          draggable={false}
        />
      </motion.div>

      {labelBefore && (
        <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
          {labelBefore}
        </span>
      )}
      {labelAfter && (
        <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {labelAfter}
        </span>
      )}

      {/* Ползунок */}
      <motion.div
        role="slider"
        tabIndex={0}
        aria-label="Сравнение до и после"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={ariaValue}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 flex w-0 items-center justify-center outline-none"
        style={{ left: handleLeft }}
      >
        <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-foreground/90" />
        <div
          className={cn(
            "relative flex size-12 items-center justify-center rounded-full bg-foreground text-background shadow-[0_8px_24px_-6px_rgb(0_0_0/0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "group-focus-visible:ring-3 ring-ring",
            dragging && "scale-110",
          )}
        >
          <ChevronsLeftRight className="size-6" strokeWidth={2} aria-hidden />
        </div>
      </motion.div>
    </div>
  );
}
