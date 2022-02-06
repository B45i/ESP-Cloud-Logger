import Card from 'antd/es/card';

const DeviceCard = () => {
    return (
        <Card title="Bed room" style={{ width: 300 }}>
            <Card.Grid className="w-50">Temperature</Card.Grid>
            <Card.Grid className="w-50">Humidity</Card.Grid>
            <Card.Grid className="w-50">Battery</Card.Grid>
            <Card.Grid className="w-50">
                <i className="fa-solid fa-temperature-empty"></i> 22℃
            </Card.Grid>
        </Card>
    );
};

export default DeviceCard;
