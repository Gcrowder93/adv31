import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MonsterDetails from '../Components/MonsterDetails/MonsterDetails';
import { getMonstersById } from '../services/Monsters';
// import thisone from './img/thisone.png';

// import { useHistory } from 'react-router-dom';

export default function DetailView() {
  const { id } = useParams();
  const [monsters, setMonster] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const history = useHistory();

  // add memory router and initial entry test here
  // similar to MonsterDetails.test.js

  useEffect(() => {
    const fetchData = async () => {
      const monData = await getMonstersById(id);
      setMonster(monData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <p className="loader">Loading..</p>;

  return (
    <div className="deets">
      <div>
        <MonsterDetails {...{ monsters }} />
      </div>
    </div>
  );
}
