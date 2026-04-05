
export type BetStatus = "unsettled" | "settled" | "canceled";
export type BetQueue = "live_queue" | "pre_queue";
export type SettlementCertainty = "1" | "2" | null;
export type SettlementResult = "1" | "0" | null;
export type FinalResolution = "won" | "lost" | "void" | null;
export type VoidType = "full" | "partial";

export interface CompetitorType {
  id: string;
  name: string;
  abbreviation?: string;
  qualifier?: string;
  country?: string;
  country_code: string;
  gender?: string;
}

export interface OutcomeResultType {
  id: string;
  result: string;
}

export interface BetType {
  _id: string;
  ticket_id: string;
  status: BetStatus;
  queue: BetQueue;
  event_id: string;
  market_db_id: string;
  market_title: string;
  market_id: string;
  specifiers: string | null;
  outcome_id: string;
  outcome_name: string;
  actual_outcome: OutcomeResultType[] | null;
  odds: string;
  competitors: CompetitorType[];
  settlement_certainty: SettlementCertainty;
  settlement_result: SettlementResult;
  final_resolution: FinalResolution;
  void_factor?: string;
  void_type?: VoidType;
  void_reason?: string;
  rollback?: boolean;
}
