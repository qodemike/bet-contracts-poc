import { Schema } from "mongoose";

export const competitorSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    abbreviation: { type: String },
    qualifier: { type: String },
    country: { type: String },
    country_code: { type: String, required: true },
    gender: { type: String },
  },
  { _id: false },
);

export const outcomeResultSchema = new Schema(
  {
    id: { type: String, required: true },
    result: { type: String, required: true },
  },
  { _id: false },
);

export const betSchema = new Schema(
  {
    _id: { type: String, required: true },
    ticket_id: { type: String, required: true },
    status: { type: String, enum: ["unsettled", "settled", "canceled"], required: true },
    queue: { type: String, enum: ["live_queue", "pre_queue"], required: true },
    event_id: { type: String, required: true },
    market_db_id: { type: String, required: true },
    market_title: { type: String, required: true },
    market_id: { type: String, required: true },
    specifiers: { type: String, default: null },
    outcome_id: { type: String, required: true },
    outcome_name: { type: String, required: true },
    actual_outcome: { type: [outcomeResultSchema], default: null },
    odds: { type: String, required: true },
    competitors: { type: [competitorSchema], required: true, default: [] },
    settlement_certainty: { type: String, enum: ["1", "2"], default: null },
    settlement_result: { type: String, enum: ["1", "0"], default: null },
    final_resolution: { type: String, enum: ["won", "lost", "void"], default: null },
    void_factor: { type: String },
    void_type: { type: String, enum: ["full", "partial"] },
    void_reason: { type: String },
    rollback: { type: Boolean },
  },
  {
    versionKey: false,
  },
);
