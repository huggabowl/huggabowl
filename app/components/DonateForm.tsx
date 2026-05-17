import { useState } from "react";
import { Form, useNavigation } from "react-router";
import { Field } from "@base-ui/react/field";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";

const PRESETS = [5, 20, 50, 100] as const;

export function DonateForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [preset, setPreset] = useState<string>("20");
  const [custom, setCustom] = useState<string>("");

  const amount = preset === "custom" ? custom : preset;

  return (
    <Form method="post" className="space-y-6">
      <RadioGroup
        value={preset}
        onValueChange={(value) => setPreset(String(value))}
        className="grid grid-cols-2 gap-3 sm:grid-cols-5"
      >
        {PRESETS.map((p) => (
          <PresetTile key={p} value={String(p)} label={`$${p}`} />
        ))}
        <PresetTile value="custom" label="Other" />
      </RadioGroup>

      {preset === "custom" ? (
        <Field.Root>
          <Field.Label className="block text-sm font-medium text-stone-800">
            Amount (CAD)
          </Field.Label>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-stone-500">$</span>
            <Field.Control
              type="number"
              name="custom"
              min="1"
              step="1"
              inputMode="decimal"
              required
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 shadow-sm focus:border-orange-600 focus:ring-2 focus:ring-orange-200 focus:outline-none"
              placeholder="50"
            />
          </div>
          <Field.Description className="mt-1 text-xs text-stone-500">
            Any whole-dollar amount.
          </Field.Description>
        </Field.Root>
      ) : null}

      <input type="hidden" name="amount" value={amount} />

      <button
        type="submit"
        disabled={isSubmitting || !amount || Number(amount) <= 0}
        className="w-full rounded-md bg-orange-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-orange-800 disabled:cursor-not-allowed disabled:bg-stone-400"
      >
        {isSubmitting ? "Redirecting to Stripe…" : `Donate $${amount || "—"}`}
      </button>

      <p className="text-center text-xs text-stone-500">
        You&rsquo;ll be redirected to Stripe to complete your donation.
      </p>
    </Form>
  );
}

function PresetTile({ value, label }: { value: string; label: string }) {
  return (
    <Radio.Root
      value={value}
      className="group cursor-pointer rounded-md border border-stone-300 bg-white px-4 py-3 text-center font-semibold text-stone-800 transition-colors hover:bg-stone-50 data-[checked]:border-orange-700 data-[checked]:bg-orange-50 data-[checked]:text-orange-800"
    >
      {label}
    </Radio.Root>
  );
}
