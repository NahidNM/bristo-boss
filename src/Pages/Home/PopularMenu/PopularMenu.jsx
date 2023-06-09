import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');
    

    // const [menu, setMenu] = useState([]);  

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //        const popularItems = data.filter(item => item.category === 'popular');
    //        setMenu(popularItems);
    //     })
    // },[])

    return (
        <section className='mb-10'>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid gap-10 md:grid-cols-2'>
                {
                    popularItems.map(item => <MenuItem
                    key={item._id} item = {item}></MenuItem>)
                }
            </div>
         <div className='text-center'>
         <button className='mt-4 border-0 border-b-4 btn-outline btn'>View Full Menu</button>
         </div>
        </section>
    );
};


export default PopularMenu;