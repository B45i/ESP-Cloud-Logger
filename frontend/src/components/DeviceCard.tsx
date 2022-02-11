import Card from 'antd/es/card';

const DeviceCard = () => {
    return (
        <Card title="Bed room" style={{ width: 300 }}>
            <Card.Grid className="w-100">
                <i className="fa-solid fa-temperature-empty"></i>
                22℃
            </Card.Grid>
            <Card.Grid className="w-100">
                <i className="fas fa-tint"></i>
                35%
            </Card.Grid>
            <Card.Grid className="w-100">
                <i className="fas fa-battery-half"></i>
                80%
            </Card.Grid>
            <Card.Grid className="w-100">
                <i className="fas fa-clock"></i>
                7:30 PM 07-02-2022
            </Card.Grid>
        </Card>
    );
};

export default DeviceCard;
