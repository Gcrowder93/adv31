import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import MonsterDetails from '../Components/MonsterDetails/MonsterDetails';
import { getMonstersById } from '../services/Monsters';
import { Link } from 'react-router-dom';

export default function DetailView() {
  const { id } = useParams();
  const [monsters, setMonster] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const monData = await getMonstersById(id);
      setMonster(monData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading..</p>;

  return (
    <div className="deets">
      <div>
        <MonsterDetails {...{ monsters }} /*handleSubmit={handleSubmit}*/ />
      </div>
      <Link to="/">Back to Home</Link>
      {/* <a href="/">Back To Home</a> */}
    </div>
  );
}
