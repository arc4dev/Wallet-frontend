export const selectTransactions = state => state.finance.data;

export const selectTotalBalance = state => state.finance.totalBalance;

export const selectIsLoading = state => state.finance.isLoading;

export const selectError = state => state.finance.error;

export const selectStatistics = state => state.finance.statistics;
