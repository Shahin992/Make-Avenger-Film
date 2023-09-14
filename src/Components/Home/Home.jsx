import Card from "./card/Card";


// eslint-disable-next-line react/prop-types
const Home = ({SelectBtn}) => {
    return (
        <div className='w-2/3 ml-10'>
           

           
            <Card SelectBtn={SelectBtn}></Card>
           

         
        </div>
    );
};

export default Home;