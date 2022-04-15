import {rest} from "msw";
import {setupServer} from "msw/node";
import { renderHook, act } from '@testing-library/react-hooks';
import useProduct from "../../hooks/useProduct";

const server = setupServer(
    rest.get(
        "http://localhost:8000/api/product",
        (req, res, ctx) => {
            return res(
                ctx.json({
                    products: [{
                        id: 15,
                            name: 'Alien Rick',
                            price: '20',
                            quantity: 20,
                            image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg'
                        }
                    ]}))}),
    // remove
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("add product", async () => {
    const {result} = renderHook(() => useProduct());
    const {loading, addProduct} = result.current;
    expect(loading).toEqual(true);
    await act(async () => {
        await addProduct()
    });
    const {products} = result.current;
    console.log(products);
})

