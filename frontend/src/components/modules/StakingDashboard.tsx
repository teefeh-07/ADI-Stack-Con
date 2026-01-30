
export const StakingDashboard: React.FC<StakingDashboardProps> = ({ id, debug }) => {
  const [state, setState] = useState<State>({ loading: false, data: null });

  useEffect(() => {
    if(debug) console.log('Component Mounted', id);
  }, [id, debug]);

  return (
    <div className={styles.wrapper}>
      <h2>Module: {id}</h2>
      {state.loading && <p>Loading...</p>}
    </div>
  );
