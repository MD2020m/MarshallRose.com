function FabricSelectBtn({ fabric, selectFabric }) {

    const handleSelectFabric = () => {
        selectFabric(fabric);
    };

    return (
        <button className='FabricSelectBtn' onClick={handleSelectFabric}>
            {fabric}
        </button>
    );
}

export default FabricSelectBtn;