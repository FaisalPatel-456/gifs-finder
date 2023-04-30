
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { saveAs } from "file-saver";

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
    
    // async function fetchData() {

    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {

    //     fetchData();
    // }, [])

    const {gif, loading, fetchData} = useGif();

    function clickHandler() {
        fetchData();
    }

    const downloadHandler = () => {

        saveAs(gif, "random-gif.gif");

    }

    return(

        <div className="w-full rounded-lg flex flex-col items-center gap-5
        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">

            <h1 className="text-2xl text-[#1e24e1] mt-5 uppercase font-bold">A Random Gif</h1>

            {
                loading ? 
                (
                    <div className="w-100 h-80">

                        <Spinner />

                    </div>
                ) :
                (
                    <div className="w-100 h-80">

                        <img src={gif} className="w-full h-full object-scale-down" alt="random gif"/>

                    </div>
                )
            }

            <button onClick={clickHandler} className="w-10/12 bg-[#3f44de] hover:bg-[#1e24e1] text-white font-bold 
            transition ease-linear duration-200 text-lg py-2 rounded-lg" >
                Generate
            </button>

            <button onClick={downloadHandler} className="w-10/12 mb-5 bg-[#f03131] hover:bg-[#e51515] text-white font-bold
             text-lg py-2 rounded-lg transition ease-linear duration-200" >
                Download
            </button>

        </div>
    );
}

export default Random;