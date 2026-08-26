import type { ChangeEvent } from "react";

export type InquiryOption = {
  value: string;
  label: string;
};

type InquiryChoiceField = {
  label: string;
  name: string;
  placeholder: string;
  options: readonly InquiryOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  readOnlyValue?: string;
  hiddenName?: string;
  hiddenValue?: string;
};

type InquiryNumberField = {
  label: string;
  name: string;
};

type InquiryScheduleField = {
  label: string;
  name: string;
  type: "date" | "time";
};

type InquiryHiddenField = {
  name: string;
  value: string;
};

type InquiryFormProps = {
  idPrefix: string;
  ariaLabel?: string;
  choice?: InquiryChoiceField;
  numberField?: InquiryNumberField;
  scheduleFields?: readonly InquiryScheduleField[];
  hiddenFields?: readonly InquiryHiddenField[];
  includePhone?: boolean;
  fullNameFullWidth?: boolean;
  statusMessage?: string;
};

const defaultStatusMessage =
  "Inquiry delivery is not connected yet. This form is available for layout review only.";

export function InquiryForm({
  idPrefix,
  ariaLabel,
  choice,
  numberField,
  scheduleFields = [],
  hiddenFields = [],
  includePhone = false,
  fullNameFullWidth = false,
  statusMessage = defaultStatusMessage,
}: InquiryFormProps) {
  const fieldId = (field: string) => `${idPrefix}-${field}`;

  return (
    <form
      className="accommodation-inquiry__form"
      aria-label={ariaLabel}
      onSubmit={(event) => event.preventDefault()}
    >
      {hiddenFields.map((field) => (
        <input name={field.name} type="hidden" value={field.value} key={field.name} />
      ))}

      <div
        className={`accommodation-inquiry__field${
          fullNameFullWidth ? " accommodation-inquiry__field--full" : ""
        }`}
      >
        <label htmlFor={fieldId("name")}>Full name</label>
        <input id={fieldId("name")} name="name" type="text" autoComplete="name" />
      </div>

      <div className="accommodation-inquiry__field">
        <label htmlFor={fieldId("email")}>Email address</label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
        />
      </div>

      {includePhone ? (
        <div className="accommodation-inquiry__field">
          <label htmlFor={fieldId("phone")}>Phone number</label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
      ) : null}

      {choice ? (
        <div className="accommodation-inquiry__field">
          <label htmlFor={fieldId(choice.name)}>{choice.label}</label>
          {choice.readOnlyValue ? (
            <>
              <input
                id={fieldId(choice.name)}
                name={choice.name}
                type="text"
                value={choice.readOnlyValue}
                readOnly
              />
              {choice.hiddenName && choice.hiddenValue ? (
                <input
                  name={choice.hiddenName}
                  type="hidden"
                  value={choice.hiddenValue}
                />
              ) : null}
            </>
          ) : (
            <select
              id={fieldId(choice.name)}
              name={choice.name}
              value={choice.value}
              defaultValue={choice.value === undefined ? choice.defaultValue ?? "" : undefined}
              onChange={choice.onChange}
            >
              <option value="">{choice.placeholder}</option>
              {choice.options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ) : null}

      {numberField ? (
        <div className="accommodation-inquiry__field">
          <label htmlFor={fieldId(numberField.name)}>{numberField.label}</label>
          <input
            id={fieldId(numberField.name)}
            name={numberField.name}
            type="number"
            min="1"
            inputMode="numeric"
          />
        </div>
      ) : null}

      {scheduleFields.map((field) => (
        <div className="accommodation-inquiry__field" key={field.name}>
          <label htmlFor={fieldId(field.name)}>{field.label}</label>
          <input
            id={fieldId(field.name)}
            name={field.name}
            type={field.type}
            autoComplete="off"
          />
        </div>
      ))}

      <div className="accommodation-inquiry__field accommodation-inquiry__field--full">
        <label htmlFor={fieldId("message")}>What would you like us to know?</label>
        <textarea id={fieldId("message")} name="message" rows={5} />
      </div>

      <div className="accommodation-inquiry__actions accommodation-inquiry__field--full">
        <button type="submit" disabled aria-describedby={fieldId("status")}>
          Send inquiry
        </button>
        <p id={fieldId("status")}>{statusMessage}</p>
      </div>
    </form>
  );
}
