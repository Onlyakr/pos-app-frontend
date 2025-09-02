const Role = ({ isManager }: { isManager: boolean }) => {
  return (
    <span className="text-muted-foreground text-sm">
      {isManager ? "Manager" : "Cashier"}
    </span>
  );
};
export default Role;
