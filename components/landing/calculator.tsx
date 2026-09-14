"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatRub } from "@/components/landing/primitives";
import { site, whatsappWith } from "@/lib/site";

const PANEL_W = site.pricing.panel.width / 1000; // м
const PANEL_H = site.pricing.panel.height / 1000; // м

type Finish = "standard" | "metallic";

const inputClass =
  "h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring";

/**
 * Прикидка количества панелей: панели ставятся вертикально, 2,8 м в высоту.
 * Точный расчёт с раскроем делает дизайнер на замере.
 */
export function Calculator() {
  const [widthStr, setWidthStr] = React.useState("4");
  const [heightStr, setHeightStr] = React.useState("2.7");
  const [finish, setFinish] = React.useState<Finish>("standard");

  const width = parseFloat(widthStr.replace(",", "."));
  const height = parseFloat(heightStr.replace(",", "."));
  const valid = Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0;

  const perPanel = finish === "metallic" ? site.pricing.perPanelMetallic : site.pricing.perPanel;
  const panels = valid ? Math.ceil(width / PANEL_W) * Math.ceil(height / PANEL_H) : 0;
  const total = panels * perPanel;
  const area = valid ? width * height : 0;

  const message = valid
    ? `Здравствуйте! Считал(а) на сайте: стена ${widthStr}×${heightStr} м, серия ${
        finish === "metallic" ? "Металлик" : "стандартная"
      }, получилось ${panels} панелей. Хочу записаться на замер.`
    : "Здравствуйте! Хочу записаться на замер.";

  return (
    <form
      className="rounded-2xl bg-surface p-6 sm:p-8"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Калькулятор панелей"
    >
      <h3 className="font-heading text-xl font-semibold tracking-tight">Сколько панелей нужно</h3>
      <p className="mt-1 text-sm text-muted-foreground">Введите размеры одной стены.</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label htmlFor="calc-width" className="text-sm font-medium">
            Ширина, м
          </label>
          <input
            id="calc-width"
            inputMode="decimal"
            value={widthStr}
            onChange={(e) => setWidthStr(e.target.value)}
            className={inputClass}
            aria-invalid={!valid}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="calc-height" className="text-sm font-medium">
            Высота, м
          </label>
          <input
            id="calc-height"
            inputMode="decimal"
            value={heightStr}
            onChange={(e) => setHeightStr(e.target.value)}
            className={inputClass}
            aria-invalid={!valid}
          />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium">Серия</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 rounded-full bg-background p-1">
          {(
            [
              ["standard", "Стандарт"],
              ["metallic", "Металлик"],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className="relative flex h-10 cursor-pointer items-center justify-center rounded-full text-sm font-medium transition-colors has-checked:bg-primary has-checked:text-primary-foreground"
            >
              <input
                type="radio"
                name="finish"
                value={value}
                checked={finish === value}
                onChange={() => setFinish(value)}
                className="sr-only"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 border-t border-border pt-6" aria-live="polite">
        {valid ? (
          <>
            <p className="text-sm text-muted-foreground">
              {area.toLocaleString("ru-RU", { maximumFractionDigits: 1 })} м², {panels}{" "}
              {plural(panels, "панель", "панели", "панелей")} по {formatRub(perPanel)}
            </p>
            <p className="mt-1 font-heading text-3xl font-bold tracking-tight">≈ {formatRub(total)}</p>
          </>
        ) : (
          <p className="text-sm text-destructive">Введите ширину и высоту числом, например 3,5.</p>
        )}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Без учёта раскроя под окна и двери. Точный расчёт сделает дизайнер на бесплатном замере.
        </p>
      </div>

      <Button asChild size="lg" className="mt-6 w-full">
        <a href={whatsappWith(message)} target="_blank" rel="noopener">
          <MessageCircle aria-hidden />
          Написать Артёму
        </a>
      </Button>
    </form>
  );
}

function plural(n: number, one: string, few: string, many: string) {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}
