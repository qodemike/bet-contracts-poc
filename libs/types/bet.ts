
type BetStatus = "unsettled" | "settled" | "canceled";
type BetQueue = "live_queue" | "pre_queue";
type BetSettlementCertainty = "1" | "2" | null;
type BetSettlementResult = "1" | "0" | null;
type BetFinalResolution = "won" | "lost" | "void" | null;
type BetVoidType = "full" | "partial";

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
  settlement_certainty: BetSettlementCertainty;
  settlement_result: BetSettlementResult;
  final_resolution: BetFinalResolution;
  void_factor?: string;
  void_type?: BetVoidType;
  void_reason?: string;
  rollback?: boolean;
}
