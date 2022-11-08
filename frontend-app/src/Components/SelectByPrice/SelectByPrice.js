export default function SelectByPrice({ onChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "200px",
        margin: "0 auto 20px",
      }}
    >
      <p>Filtro (Preço)</p>
      <select onChange={onChange}>
        <option value="none" disabled>
          Selecione um filtro
        </option>
        <option value="high">Maior preço</option>
        <option value="low">Menor preço</option>
      </select>
    </div>
  )
}
