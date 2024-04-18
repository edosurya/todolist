
export default function Product() {
    const products = [
        {id: 1, name: "laptop", price: "$300"},
        {id: 2, name: "handphone", price: "$200"},
        {id: 3, name: "modem", price: "$100"}
    ]
    const fruits = ['Apple', 'Manggo', 'Banana']

    const product = products.map((product)=> <li key={product.id}> {product.name} : {product.price} </li>)
    const fruit = fruits.map((fruit, index) => <li key={index}> {fruit} </li>)

    return <div><ul>{product}</ul><ul>{fruit}</ul></div>
}