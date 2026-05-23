"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const editions = [
  { id: "hero", label: "Hero Story Edition", price: "$35" },
  { id: "extended", label: "Extended Hero Story Edition", price: "$65" },
  { id: "legacy", label: "Legacy Keepsake Edition", price: "$115" },
] as const;

type EditionId = (typeof editions)[number]["id"];

type FormState = {
  customerName: string;
  email: string;
  phone: string;
  edition: EditionId;
  addPrint: boolean;
  addRush: boolean;
  childName: string;
  childAge: string;
  storyNotes: string;
};

const initialState: FormState = {
  customerName: "",
  email: "",
  phone: "",
  edition: "extended",
  addPrint: false,
  addRush: false,
  childName: "",
  childAge: "",
  storyNotes: "",
};

const ORDER_EMAIL = "hello@azureislandstorybooks.com";

function buildMailto(state: FormState) {
  const edition = editions.find((e) => e.id === state.edition);
  const addOns: string[] = [];
  if (state.addPrint) addOns.push("Print Add-On");
  if (state.addRush) addOns.push("Rush Add-On");

  const lines = [
    `New Azure Island Story Books order`,
    ``,
    `Customer: ${state.customerName || "(not provided)"}`,
    `Email: ${state.email || "(not provided)"}`,
    `Phone: ${state.phone || "(not provided)"}`,
    ``,
    `Edition: ${edition?.label ?? state.edition} (${edition?.price ?? ""})`,
    `Add-ons: ${addOns.length > 0 ? addOns.join(", ") : "None"}`,
    ``,
    `Child's name: ${state.childName || "(not provided)"}`,
    `Child's age: ${state.childAge || "(not provided)"}`,
    ``,
    `Story idea / notes:`,
    state.storyNotes || "(none)",
    ``,
    `--`,
    `Payment: PayPal QR scanned on the order page.`,
  ];

  const subject = `New order — ${edition?.label ?? "Storybook"} for ${state.childName || "a child"}`;
  const body = lines.join("\n");

  return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function OrderForm() {
  const [state, setState] = useState<FormState>(initialState);

  const selectedEdition = useMemo(
    () => editions.find((e) => e.id === state.edition)!,
    [state.edition],
  );

  const canConfirm =
    state.customerName.trim() !== "" &&
    state.email.trim() !== "" &&
    state.childName.trim() !== "";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="order-page">
      <form className="order-form" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Your details</legend>

          <label className="field">
            <span>Your name *</span>
            <input
              type="text"
              required
              value={state.customerName}
              onChange={(e) => update("customerName", e.target.value)}
              autoComplete="name"
            />
          </label>

          <label className="field">
            <span>Email *</span>
            <input
              type="email"
              required
              value={state.email}
              onChange={(e) => update("email", e.target.value)}
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span>Phone (optional)</span>
            <input
              type="tel"
              value={state.phone}
              onChange={(e) => update("phone", e.target.value)}
              autoComplete="tel"
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Choose your edition</legend>
          <div className="edition-options">
            {editions.map((edition) => (
              <label
                key={edition.id}
                className={`edition-option${state.edition === edition.id ? " edition-option-selected" : ""}`}
              >
                <input
                  type="radio"
                  name="edition"
                  value={edition.id}
                  checked={state.edition === edition.id}
                  onChange={() => update("edition", edition.id)}
                />
                <div>
                  <strong>{edition.label}</strong>
                  <span>{edition.price}</span>
                </div>
              </label>
            ))}
          </div>

          <div className="add-ons">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={state.addPrint}
                onChange={(e) => update("addPrint", e.target.checked)}
              />
              <span>Print Add-On</span>
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={state.addRush}
                onChange={(e) => update("addRush", e.target.checked)}
              />
              <span>Rush Add-On</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>About your hero</legend>

          <label className="field">
            <span>Child&apos;s name *</span>
            <input
              type="text"
              required
              value={state.childName}
              onChange={(e) => update("childName", e.target.value)}
            />
          </label>

          <label className="field">
            <span>Child&apos;s age (optional)</span>
            <input
              type="text"
              value={state.childAge}
              onChange={(e) => update("childAge", e.target.value)}
            />
          </label>

          <label className="field">
            <span>Story idea or notes</span>
            <textarea
              rows={4}
              value={state.storyNotes}
              onChange={(e) => update("storyNotes", e.target.value)}
              placeholder="Personality, favorite things, family details, special moments to include..."
            />
          </label>
        </fieldset>
      </form>

      <section className="order-review" aria-labelledby="review-heading">
        <h2 id="review-heading">Review your order</h2>
        <dl className="review-list">
          <div>
            <dt>Customer</dt>
            <dd>{state.customerName || <em>— add your name above</em>}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{state.email || <em>— add your email above</em>}</dd>
          </div>
          <div>
            <dt>Edition</dt>
            <dd>
              {selectedEdition.label} ({selectedEdition.price})
            </dd>
          </div>
          <div>
            <dt>Add-ons</dt>
            <dd>
              {[state.addPrint && "Print", state.addRush && "Rush"]
                .filter(Boolean)
                .join(", ") || "None"}
            </dd>
          </div>
          <div>
            <dt>Hero</dt>
            <dd>
              {state.childName || <em>— add your child&apos;s name above</em>}
              {state.childAge ? ` (age ${state.childAge})` : ""}
            </dd>
          </div>
        </dl>
      </section>

      <section className="order-payment" aria-labelledby="payment-heading">
        <h2 id="payment-heading">Pay & confirm</h2>
        <div className="payment-grid">
          <div className="paypal-block">
            <Image
              src="/paypal-qr.jpg"
              alt="PayPal QR code for Azure Island Story Books"
              width={520}
              height={520}
              className="paypal-qr"
            />
            <p className="paypal-caption">Scan to pay with PayPal</p>
          </div>

          <div className="confirm-block">
            <p>
              Please complete payment with the PayPal QR, then tap{" "}
              <strong>Confirm Order</strong> to send us your order details. Your
              email app will open with the order pre-filled — just hit send.
            </p>
            <a
              className={`button button-primary${canConfirm ? "" : " button-disabled"}`}
              href={canConfirm ? buildMailto(state) : undefined}
              aria-disabled={!canConfirm}
              onClick={(e) => {
                if (!canConfirm) e.preventDefault();
              }}
            >
              Confirm Order
            </a>
            {!canConfirm ? (
              <p className="confirm-hint">
                Please fill in your name, email, and your child&apos;s name to confirm.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
