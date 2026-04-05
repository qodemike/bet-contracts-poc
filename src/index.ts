export type {
  BetStatus,
  BetQueue,
  SettlementCertainty,
  SettlementResult,
  FinalResolution,
  VoidType,
  CompetitorType,
  OutcomeResultType,
  BetType,
} from "@libs/types/bet";
export type { Bet } from "@generated/bet.pb";
export { BetStatus as ProtoBetStatus, BetQueue as ProtoBetQueue } from "@generated/bet.pb";
