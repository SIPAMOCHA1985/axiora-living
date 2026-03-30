"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface LineItem {
  id: number;
  description: string;
  qty: string;
  unit: string;
  amount: number;
}

interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  projectAddress: string;
  notes: string;
  taxRate: string;
  discount: string;
  paymentTerms: string;
}

const PAYMENT_TERMS_OPTIONS = [
  "Due on Receipt",
  "Net 15",
  "Net 30",
  "50% Deposit / 50% on Completion",
  "Custom",
];

function newItem(id: number): LineItem {
  return { id, description: "", qty: "1", unit: "", amount: 0 };
}

export default function InvoicePage() {
  const printRef = useRef<HTMLDivElement>(null);
  const today = new Date().toISOString().split("T")[0];

  const [data, setData] = useState<InvoiceData>({
    invoiceNumber: `IXL-${new Date().getFullYear()}-001`,
    issueDate: today,
    dueDate: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientAddress: "",
    projectAddress: "",
    notes: "",
    taxRate: "0",
    discount: "0",
    paymentTerms: "Due on Receipt",
  });

  const [items, setItems] = useState<LineItem[]>([newItem(1)]);
  const [nextId, setNextId] = useState(2);
  const [isPrintMode, setIsPrintMode] = useState(false);

  function setField(field: keyof InvoiceData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function setItem(id: number, field: keyof LineItem, value: string | number) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  }

  function addItem() {
    setItems((prev) => [...prev, newItem(nextId)]);
    setNextId((n) => n + 1);
  }

  function removeItem(id: number) {
    if (items.length === 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  const subtotal = items.reduce((sum, item) => sum + (item.amount || 0), 0);
  const discountAmt = subtotal * (parseFloat(data.discount) / 100 || 0);
  const taxableAmount = subtotal - discountAmt;
  const taxAmt = taxableAmount * (parseFloat(data.taxRate) / 100 || 0);
  const total = taxableAmount + taxAmt;

  function fmt(n: number) {
    return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function handlePrint() {
    setIsPrintMode(true);
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
    }, 100);
  }

  const gold = "#C9A96E";
  const dark = "#1C1C1C";
  const cream = "#FAF9F6";
  const surface = "#F0EDE6";
  const border = "#E2DDD5";
  const muted = "#6B6B6B";

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; }
          input, select, textarea {
            border: none !important;
            outline: none !important;
            background: transparent !important;
          }
        }
        @media screen {
          .print-only { display: none; }
        }
        input, select, textarea {
          font-family: var(--font-inter, Inter, sans-serif);
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
        }
      `}</style>

      <div style={{ backgroundColor: "#F5F2ED", minHeight: "100vh", fontFamily: "var(--font-inter), Inter, sans-serif" }}>

        {/* Toolbar */}
        <div
          className="no-print"
          style={{
            backgroundColor: dark,
            padding: "16px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <Link
            href="/"
            style={{
              color: cream,
              textDecoration: "none",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "18px",
              letterSpacing: "4px",
            }}
          >
            IXORA LIVING
          </Link>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link
              href="/"
              style={{
                color: muted,
                textDecoration: "none",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              ← Back
            </Link>
            <button
              onClick={handlePrint}
              style={{
                backgroundColor: gold,
                color: cream,
                border: "none",
                padding: "10px 28px",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            >
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Invoice Sheet */}
        <div
          ref={printRef}
          style={{
            maxWidth: "900px",
            margin: "40px auto",
            backgroundColor: cream,
            boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
            padding: "64px 72px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "52px",
              paddingBottom: "40px",
              borderBottom: `1px solid ${gold}`,
            }}
          >
            {/* Brand */}
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "32px",
                  fontWeight: 500,
                  letterSpacing: "6px",
                  color: dark,
                  margin: "0 0 8px",
                }}
              >
                IXORA LIVING
              </h1>
              <p style={{ color: gold, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 20px" }}>
                Interior Design & Remodeling
              </p>
              <p style={{ color: muted, fontSize: "13px", margin: 0, lineHeight: 1.8, fontWeight: 300 }}>
                hello@ixoraliving.com<br />
                (689) 278-5555<br />
                Orange County, FL 32836
              </p>
            </div>

            {/* Invoice Meta */}
            <div style={{ textAlign: "right", minWidth: "260px" }}>
              <div
                style={{
                  backgroundColor: dark,
                  color: cream,
                  display: "inline-block",
                  padding: "8px 20px",
                  fontSize: "11px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                Invoice
              </div>
              <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ color: muted, padding: "6px 0", textAlign: "left", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Invoice No.</td>
                    <td style={{ padding: "6px 0", textAlign: "right" }}>
                      <EditableField
                        value={data.invoiceNumber}
                        onChange={(v) => setField("invoiceNumber", v)}
                        align="right"
                        weight={500}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: muted, padding: "6px 0", textAlign: "left", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Issue Date</td>
                    <td style={{ padding: "6px 0", textAlign: "right" }}>
                      <input
                        type="date"
                        value={data.issueDate}
                        onChange={(e) => setField("issueDate", e.target.value)}
                        style={{ border: "none", backgroundColor: "transparent", fontSize: "13px", color: dark, textAlign: "right", cursor: "text", width: "140px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: muted, padding: "6px 0", textAlign: "left", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Due Date</td>
                    <td style={{ padding: "6px 0", textAlign: "right" }}>
                      <input
                        type="date"
                        value={data.dueDate}
                        onChange={(e) => setField("dueDate", e.target.value)}
                        style={{ border: "none", backgroundColor: "transparent", fontSize: "13px", color: dark, textAlign: "right", cursor: "text", width: "140px" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bill To & Project */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "52px" }}>
            <div>
              <p style={{ color: gold, fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", margin: "0 0 16px", fontWeight: 500 }}>
                Bill To
              </p>
              <EditableField
                value={data.clientName}
                onChange={(v) => setField("clientName", v)}
                placeholder="Client Full Name"
                fontSize={16}
                weight={500}
              />
              <EditableField
                value={data.clientEmail}
                onChange={(v) => setField("clientEmail", v)}
                placeholder="client@email.com"
                color={muted}
              />
              <EditableField
                value={data.clientPhone}
                onChange={(v) => setField("clientPhone", v)}
                placeholder="(407) 000-0000"
                color={muted}
              />
              <EditableField
                value={data.clientAddress}
                onChange={(v) => setField("clientAddress", v)}
                placeholder="Client Address"
                color={muted}
              />
            </div>
            <div>
              <p style={{ color: gold, fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", margin: "0 0 16px", fontWeight: 500 }}>
                Project Address
              </p>
              <EditableField
                value={data.projectAddress}
                onChange={(v) => setField("projectAddress", v)}
                placeholder="123 Main St, Orlando, FL 32836"
                weight={400}
                color={muted}
              />
              <div style={{ marginTop: "24px" }}>
                <p style={{ color: gold, fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", margin: "0 0 8px", fontWeight: 500 }}>
                  Payment Terms
                </p>
                <select
                  value={data.paymentTerms}
                  onChange={(e) => setField("paymentTerms", e.target.value)}
                  style={{
                    border: "none",
                    borderBottom: `1px solid ${border}`,
                    backgroundColor: "transparent",
                    fontSize: "14px",
                    color: dark,
                    padding: "6px 0",
                    width: "100%",
                    cursor: "pointer",
                    appearance: "none",
                    fontWeight: 300,
                  }}
                >
                  {PAYMENT_TERMS_OPTIONS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div style={{ marginBottom: "40px" }}>
            {/* Table Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 120px 120px 36px",
                gap: "16px",
                padding: "12px 0",
                borderBottom: `1px solid ${dark}`,
                marginBottom: "8px",
              }}
            >
              {["Description", "Qty", "Unit Price", "Amount", ""].map((h, i) => (
                <p
                  key={i}
                  style={{
                    margin: 0,
                    fontSize: "10px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: muted,
                    textAlign: i >= 2 ? "right" : "left",
                  }}
                >
                  {h}
                </p>
              ))}
            </div>

            {/* Items */}
            {items.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 120px 120px 36px",
                  gap: "16px",
                  padding: "10px 0",
                  borderBottom: `1px solid ${idx % 2 === 1 ? surface : "transparent"}`,
                  backgroundColor: idx % 2 === 1 ? surface : "transparent",
                  alignItems: "center",
                  paddingLeft: idx % 2 === 1 ? "8px" : 0,
                  paddingRight: idx % 2 === 1 ? "8px" : 0,
                }}
              >
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => setItem(item.id, "description", e.target.value)}
                  placeholder={`Line item ${idx + 1}…`}
                  style={{ border: "none", background: "transparent", fontSize: "14px", fontWeight: 300, color: dark, width: "100%" }}
                />
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => setItem(item.id, "qty", e.target.value)}
                  min="0"
                  style={{ border: "none", background: "transparent", fontSize: "14px", fontWeight: 300, color: dark, width: "100%", textAlign: "right" }}
                />
                <input
                  type="number"
                  value={item.unit}
                  onChange={(e) => {
                    const unit = parseFloat(e.target.value) || 0;
                    const qty = parseFloat(item.qty) || 1;
                    setItem(item.id, "unit", e.target.value);
                    setItem(item.id, "amount", unit * qty);
                  }}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  style={{ border: "none", background: "transparent", fontSize: "14px", fontWeight: 300, color: dark, width: "100%", textAlign: "right" }}
                />
                <p style={{ margin: 0, fontSize: "14px", fontWeight: 500, color: dark, textAlign: "right" }}>
                  ${fmt(item.amount)}
                </p>
                <button
                  className="no-print"
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: border,
                    cursor: "pointer",
                    fontSize: "18px",
                    padding: 0,
                    lineHeight: 1,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#8B3A3A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = border)}
                >
                  ×
                </button>
              </div>
            ))}

            {/* Add Item */}
            <button
              className="no-print"
              onClick={addItem}
              style={{
                marginTop: "16px",
                background: "none",
                border: `1px dashed ${border}`,
                color: muted,
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "10px 20px",
                cursor: "pointer",
                width: "100%",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = gold;
                e.currentTarget.style.color = gold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = border;
                e.currentTarget.style.color = muted;
              }}
            >
              + Add Line Item
            </button>
          </div>

          {/* Totals */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: "320px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${border}` }}>
                <span style={{ color: muted, fontSize: "13px" }}>Subtotal</span>
                <span style={{ fontSize: "13px", fontWeight: 400 }}>${fmt(subtotal)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${border}` }}>
                <span style={{ color: muted, fontSize: "13px" }}>
                  Discount (
                  <input
                    type="number"
                    value={data.discount}
                    onChange={(e) => setField("discount", e.target.value)}
                    min="0"
                    max="100"
                    style={{ border: "none", background: "transparent", width: "36px", fontSize: "13px", color: muted, textAlign: "center" }}
                  />
                  %)
                </span>
                <span style={{ fontSize: "13px", color: discountAmt > 0 ? "#6B9B6B" : muted }}>
                  {discountAmt > 0 ? `– $${fmt(discountAmt)}` : "$0.00"}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${border}` }}>
                <span style={{ color: muted, fontSize: "13px" }}>
                  Tax (
                  <input
                    type="number"
                    value={data.taxRate}
                    onChange={(e) => setField("taxRate", e.target.value)}
                    min="0"
                    max="100"
                    style={{ border: "none", background: "transparent", width: "36px", fontSize: "13px", color: muted, textAlign: "center" }}
                  />
                  %)
                </span>
                <span style={{ fontSize: "13px" }}>${fmt(taxAmt)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: dark,
                  margin: "8px -16px 0",
                  padding: "16px",
                }}
              >
                <span style={{ color: cream, fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase" }}>Total Due</span>
                <span style={{ color: gold, fontSize: "22px", fontWeight: 500, fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  ${fmt(total)}
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div style={{ marginTop: "52px", paddingTop: "40px", borderTop: `1px solid ${border}` }}>
            <p style={{ color: gold, fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", margin: "0 0 12px" }}>
              Notes & Payment Instructions
            </p>
            <textarea
              value={data.notes}
              onChange={(e) => setField("notes", e.target.value)}
              placeholder="Payment methods accepted: Visa, Mastercard, American Express, Zelle, Bank Transfer, Crypto. A 50% deposit is required to begin work. Remaining balance due upon project completion. Thank you for choosing Ixora Living."
              rows={4}
              style={{
                width: "100%",
                border: "none",
                borderBottom: `1px solid ${border}`,
                backgroundColor: "transparent",
                fontSize: "13px",
                fontWeight: 300,
                color: muted,
                lineHeight: 1.8,
                resize: "none",
                padding: "0 0 12px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "180px",
                borderTop: `1px solid ${dark}`,
                paddingTop: "12px",
              }}
            >
              <p style={{ margin: 0, fontSize: "11px", color: muted, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Authorized Signature
              </p>
            </div>
            <p style={{ color: muted, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", margin: 0 }}>
              IXORALIVING.COM
            </p>
            <div
              style={{
                width: "180px",
                borderTop: `1px solid ${border}`,
                paddingTop: "12px",
                textAlign: "right",
              }}
            >
              <p style={{ margin: 0, fontSize: "11px", color: muted, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Client Signature
              </p>
            </div>
          </div>
        </div>

        {/* Bottom padding */}
        <div style={{ height: "60px" }} className="no-print" />
      </div>
    </>
  );
}

// ─── Editable Field ────────────────────────────────────────────────────────────

function EditableField({
  value,
  onChange,
  placeholder,
  fontSize = 14,
  weight = 300,
  color = "#1C1C1C",
  align = "left",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  fontSize?: number;
  weight?: number;
  color?: string;
  align?: "left" | "right";
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        display: "block",
        width: "100%",
        border: "none",
        borderBottom: "1px solid transparent",
        backgroundColor: "transparent",
        fontSize: `${fontSize}px`,
        fontWeight: weight,
        color: value ? color : "#B0A89A",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        padding: "4px 0",
        marginBottom: "4px",
        textAlign: align,
        transition: "border-color 0.2s",
        boxSizing: "border-box",
      }}
      onFocus={(e) => (e.target.style.borderBottomColor = "#C9A96E")}
      onBlur={(e) => (e.target.style.borderBottomColor = "transparent")}
    />
  );
}
