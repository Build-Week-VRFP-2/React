import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchProjects, postProject } from '../actions/actions';

const DashBoard = (props) => {
	const { id } = useParams();

	const [data, setData] = useState({
		name: '',
		description: '',
		background: '',
		city: '',
		state: '',
	});

	const handleChanges = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	// useEffect(() => {
	// 	props.FetchProjects(id);
	// }, []);

	return (
		<div className='newproj'>
			<form>
				<input type="text" className="f3" value={data.name} name="name" placeholder='name' onChange={handleChanges} />
				<input type="text" className="f3" value={data.description} name="description" placeholder='description' onChange={handleChanges} />
				<input type="text" className="f3" value={data.background} name="background" placeholder='background' onChange={handleChanges} />
				<input type="text" className="f3" value={data.city} name="city" placeholder='city' onChange={handleChanges} />
				<input type="text" className="f3" value={data.state} name="state" placeholder='state' onChange={handleChanges} />
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		fetching: state.isLoading,
		projects: state.projects,
	};
};

export default connect(mapStateToProps, { FetchProjects, postProject })(DashBoard);
