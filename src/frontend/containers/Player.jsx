import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = props => {
  const { id } = props.match.params;
  const { playing } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    dispatch(getVideoSource(id));
  }, []);


  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <Link to="/">
          <button className="button">Return</button>
        </Link>
      </div>
    </div>
  ) : <NotFound />;
};

export default Player;