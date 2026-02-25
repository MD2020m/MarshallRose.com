import './FabricSelectBtn.css';

function FabricSelectBtn({ fabric, selectFabric, customOptions }) {

    const handleSelectFabric = () => {
        selectFabric(fabric);
    };

    return (
        <button className={`FabricSelectBtn ${customOptions.fabric === fabric ? 'selected' : ''}`} 
            onClick={handleSelectFabric}>
            {fabric}
        </button>
    );
}

export default FabricSelectBtn;