import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/CounterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  //obone mantigi degismiyor
  const store = useSelector((store) => store.counterReducer);

  return (
    <div className="vh-100 w-full d-flex justify-content-center align-items-center">
      <div className="d-flex align-items-center gap-4">
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Arttir
        </button>
        <span className="lead fw-bold">{store.count}</span>
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Azalt
        </button>
        <input
          type="number"
          className="w--25"
          onChange={(e) => dispatch(setCount(+e.target.value))}
        />
      </div>
    </div>
  );
};

export default Counter;
