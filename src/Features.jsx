import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcart } from "./productSlice";

const Features = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cartitem.cartCount); 

    const [mydata, setmydata] = useState([]);
    const [initial, setinitial] = useState(1);

    const loaddata = () => {
        const api = 'http://localhost:4000/cars';
        axios.get(api).then((res) => {
            setmydata(res.data);
        });
    };

    useEffect(() => {
        loaddata();
    }, []);

    const handlesumbit = (id, image, name, From, To, km, price) => {
        console.log(id, image, name, From, To, km, price);
        dispatch(addcart({ id:id, image:image, name:name, From:From, To:To, km:km, price:price,Quantity:`${initial}` }));
    };

    const ans = mydata.map((key) => (
        <div className="box1" key={key.id}>
            <div className="img">
                <img src={`${key.image}`} alt={key.name} />
            </div>
            <div>{key.name}</div>
            <div>
                {key.From} <span>To</span> {key.To}
            </div>
            <div>{key.km}</div>
            <div>{key.price}</div>
            <div>
                <button onClick={() => handlesumbit(key.id, key.image, key.name, key.From, key.To, key.km, key.price)}>
                    Add to Cart
                </button>
            </div>
        </div>
    ));

    return (
        <>
            <div>
                <div id="nav2">
                    <span>{cartCount}</span> <p>Cart</p>
                </div>
            </div>
            <div className="product">{ans}</div>
        </>
    );
};

export default Features;
