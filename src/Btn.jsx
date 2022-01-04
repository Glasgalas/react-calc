import './btn.css';

function Btn({ value, onClick }) {
  return (
    <div className="button" onClick={onClick}>
      {value}
    </div>
  );
}

export default Btn;
