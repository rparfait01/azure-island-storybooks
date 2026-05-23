"use client";

import { FormEvent, useMemo, useState } from "react";

const packageOptions = [
  { value: "", label: "Select a package" },
  { value: "hero", label: "Hero Story Edition - 1-16 pages - $35" },
  { value: "extended-hero", label: "Extended Hero Story Edition - 1-24 pages - $65" },
  { value: "legacy-keepsake", label: "Legacy Keepsake Edition - 1-24 pages - $115" },
];

const steps = ["Customer", "Child", "Story", "Package", "Review"];

type OrderFormProps = {
  initialPackage: string;
};

type OrderFields = {
  customerName: string;
  email: string;
  phone: string;
  preferredContact: string;
  childName: string;
  storyName: string;
  age: string;
  pronouns: string;
  favoriteThings: string;
  strengths: string;
  avoid: string;
  requestedTitle: string;
  subtitle: string;
  coreLesson: string;
  setting: string;
  emotionalChallenge: string;
  fantasyOverlay: string;
  peopleToInclude: string;
  culturalDetails: string;
  tone: string;
  endingPreference: string;
  dedication: string;
  finalLetter: string;
  specialMemory: string;
  creditNames: string;
  package: string;
  deliveryPreference: string;
  deliveryNotes: string;
};

const emptyFields: OrderFields = {
  customerName: "",
  email: "",
  phone: "",
  preferredContact: "email",
  childName: "",
  storyName: "",
  age: "",
  pronouns: "",
  favoriteThings: "",
  strengths: "",
  avoid: "",
  requestedTitle: "",
  subtitle: "",
  coreLesson: "",
  setting: "",
  emotionalChallenge: "",
  fantasyOverlay: "",
  peopleToInclude: "",
  culturalDetails: "",
  tone: "",
  endingPreference: "",
  dedication: "",
  finalLetter: "",
  specialMemory: "",
  creditNames: "",
  package: "",
  deliveryPreference: "local-delivery",
  deliveryNotes: "",
};

async function submitOrder(fields: OrderFields) {
  console.info("Azure Island Story Books order draft", fields);
}

export default function OrderForm({ initialPackage }: OrderFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState<OrderFields>({
    ...emptyFields,
    package: packageOptions.some((option) => option.value === initialPackage) ? initialPackage : "",
  });

  const selectedPackage = useMemo(
    () => packageOptions.find((option) => option.value === fields.package)?.label ?? "Not selected",
    [fields.package],
  );

  function updateField(name: keyof OrderFields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
      return;
    }

    await submitOrder(fields);
    setSubmitted(true);
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <ol className="stepper" aria-label="Order form progress">
        {steps.map((step, index) => (
          <li className={index === currentStep ? "active" : ""} key={step}>
            <span>{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>

      {submitted ? (
        <div className="form-panel">
          <h2>Order details captured</h2>
          <p>
            Your story brief is ready to send. The submit function is isolated, so the destination
            can be connected later without rebuilding the form.
          </p>
        </div>
      ) : null}

      {!submitted && currentStep === 0 ? (
        <fieldset className="form-panel">
          <legend>Customer info</legend>
          <label>
            Name
            <input value={fields.customerName} onChange={(event) => updateField("customerName", event.target.value)} />
          </label>
          <label>
            Email
            <input type="email" value={fields.email} onChange={(event) => updateField("email", event.target.value)} />
          </label>
          <label>
            Phone
            <input value={fields.phone} onChange={(event) => updateField("phone", event.target.value)} />
          </label>
          <label>
            Preferred contact
            <select
              value={fields.preferredContact}
              onChange={(event) => updateField("preferredContact", event.target.value)}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text</option>
            </select>
          </label>
        </fieldset>
      ) : null}

      {!submitted && currentStep === 1 ? (
        <fieldset className="form-panel">
          <legend>Child / hero info</legend>
          <label>
            Child&apos;s name
            <input value={fields.childName} onChange={(event) => updateField("childName", event.target.value)} />
          </label>
          <label>
            Name to use in story
            <input value={fields.storyName} onChange={(event) => updateField("storyName", event.target.value)} />
          </label>
          <label>
            Age
            <input value={fields.age} onChange={(event) => updateField("age", event.target.value)} />
          </label>
          <label>
            Pronouns
            <input value={fields.pronouns} onChange={(event) => updateField("pronouns", event.target.value)} />
          </label>
          <label>
            Favorite things
            <textarea value={fields.favoriteThings} onChange={(event) => updateField("favoriteThings", event.target.value)} />
          </label>
          <label>
            Strengths
            <textarea value={fields.strengths} onChange={(event) => updateField("strengths", event.target.value)} />
          </label>
          <label>
            Anything to avoid
            <textarea value={fields.avoid} onChange={(event) => updateField("avoid", event.target.value)} />
          </label>
        </fieldset>
      ) : null}

      {!submitted && currentStep === 2 ? (
        <fieldset className="form-panel">
          <legend>Book concept and story details</legend>
          <label>
            Requested title
            <input value={fields.requestedTitle} onChange={(event) => updateField("requestedTitle", event.target.value)} />
          </label>
          <label>
            Subtitle
            <input value={fields.subtitle} onChange={(event) => updateField("subtitle", event.target.value)} />
          </label>
          <label>
            Core lesson or value
            <textarea value={fields.coreLesson} onChange={(event) => updateField("coreLesson", event.target.value)} />
          </label>
          <label>
            Real-world setting
            <textarea value={fields.setting} onChange={(event) => updateField("setting", event.target.value)} />
          </label>
          <label>
            Emotional challenge
            <textarea
              value={fields.emotionalChallenge}
              onChange={(event) => updateField("emotionalChallenge", event.target.value)}
            />
          </label>
          <label>
            Fantasy overlay
            <textarea value={fields.fantasyOverlay} onChange={(event) => updateField("fantasyOverlay", event.target.value)} />
          </label>
          <label>
            People to include
            <textarea value={fields.peopleToInclude} onChange={(event) => updateField("peopleToInclude", event.target.value)} />
          </label>
          <label>
            Cultural details
            <textarea value={fields.culturalDetails} onChange={(event) => updateField("culturalDetails", event.target.value)} />
          </label>
          <label>
            Tone
            <input value={fields.tone} onChange={(event) => updateField("tone", event.target.value)} />
          </label>
          <label>
            Ending preference
            <textarea
              value={fields.endingPreference}
              onChange={(event) => updateField("endingPreference", event.target.value)}
            />
          </label>
        </fieldset>
      ) : null}

      {!submitted && currentStep === 3 ? (
        <fieldset className="form-panel">
          <legend>Package, personal pages, and delivery</legend>
          <label>
            Package
            <select value={fields.package} onChange={(event) => updateField("package", event.target.value)}>
              {packageOptions.map((option) => (
                <option key={option.value || "empty"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Dedication
            <textarea value={fields.dedication} onChange={(event) => updateField("dedication", event.target.value)} />
          </label>
          <label>
            Final letter
            <textarea value={fields.finalLetter} onChange={(event) => updateField("finalLetter", event.target.value)} />
          </label>
          <label>
            Special memory
            <textarea value={fields.specialMemory} onChange={(event) => updateField("specialMemory", event.target.value)} />
          </label>
          <label>
            Names to credit
            <textarea value={fields.creditNames} onChange={(event) => updateField("creditNames", event.target.value)} />
          </label>
          <label>
            Delivery preference
            <select
              value={fields.deliveryPreference}
              onChange={(event) => updateField("deliveryPreference", event.target.value)}
            >
              <option value="local-delivery">Complimentary local delivery</option>
              <option value="pickup">Pickup</option>
              <option value="shipping">Shipping quote needed</option>
            </select>
          </label>
          <label>
            Delivery notes
            <textarea value={fields.deliveryNotes} onChange={(event) => updateField("deliveryNotes", event.target.value)} />
          </label>
        </fieldset>
      ) : null}

      {!submitted && currentStep === 4 ? (
        <section className="form-panel review-panel" aria-label="Review order details">
          <h2>Review</h2>
          <dl>
            <div>
              <dt>Customer</dt>
              <dd>{fields.customerName || "Not provided"}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{fields.email || "Not provided"}</dd>
            </div>
            <div>
              <dt>Hero</dt>
              <dd>{fields.storyName || fields.childName || "Not provided"}</dd>
            </div>
            <div>
              <dt>Story focus</dt>
              <dd>{fields.coreLesson || "Not provided"}</dd>
            </div>
            <div>
              <dt>Package</dt>
              <dd>{selectedPackage}</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>{fields.deliveryPreference}</dd>
            </div>
          </dl>
        </section>
      ) : null}

      {!submitted ? (
        <div className="form-actions">
          <button
            className="button button-secondary"
            type="button"
            disabled={currentStep === 0}
            onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
          >
            Back
          </button>
          <button className="button button-primary" type="submit">
            {currentStep === steps.length - 1 ? "Submit Order Details" : "Continue"}
          </button>
        </div>
      ) : null}
    </form>
  );
}
