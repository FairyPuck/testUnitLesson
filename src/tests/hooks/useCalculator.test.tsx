import { renderHook, act } from "@testing-library/react-hooks";
import useJustForTest from "../../hooks/useCalculator";


test("show multiple examples", () => {
    const { result } = renderHook(() => useJustForTest());
    const {
        addition,
        substraction,
        square,
    } = result.current;

    expect(addition('2', '2')).toEqual('4');
    expect(substraction('16', '1')).toEqual('15');
    expect(square('15')).toEqual('225');
});

