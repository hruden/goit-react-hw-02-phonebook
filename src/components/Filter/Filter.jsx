import PropTypes from 'prop-types';
export const Filter =({filter, handleFind})=>{
    return(
    <>
        <p>Find contacts by name</p>
        <input
                onChange={handleFind}
                value={filter}
                name="filter"
                type="text"
                placeholder="Search contact..."        
        />
    </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFind: PropTypes.func,
}
