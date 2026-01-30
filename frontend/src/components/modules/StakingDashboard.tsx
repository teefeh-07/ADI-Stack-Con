
export const StakingDashboard: React.FC<StakingDashboardProps> = ({ id, debug }) => {
  const [state, setState] = useState<State>({ loading: false, data: null });
