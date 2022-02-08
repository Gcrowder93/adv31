// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import useFetchMonster from '../Components/Hooks/CustomHook';
import MonsterDetails from '../Components/MonsterDetails/MonsterDetails';
// import { getMonstersById } from '../services/Monsters';
// import thisone from './img/thisone.png';

// import { useHistory } from 'react-router-dom';

export default function DetailView() {
  // const history = useHistory();
  const [loading, monsters] = useFetchMonster();
  // const { id } = useParams();
  // const [monsters, setMonster] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const monData = await getMonstersById(id);
  //     setMonster(monData);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [id]);

  if (loading) return <p className="loader">Loading..</p>;

  return (
    <div className="deets">
      <div>
        <MonsterDetails {...{ monsters }} />
      </div>
    </div>
  );
}
