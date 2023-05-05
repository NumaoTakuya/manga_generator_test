const Layer = ({ children, zIndex }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: zIndex,
        backgroundColor: "trasparent", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }} 
    >
      {children}
    </div>
  );
};
export default Layer;
