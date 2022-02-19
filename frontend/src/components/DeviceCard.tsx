import Card from 'antd/es/card';
import Statistic from 'antd/es/statistic';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Button from 'antd/es/button';

const StatisticCol = ({ title, value, prefix, suffix }: any) => (
    <Col span={12}>
        <Statistic
            title={title}
            value={value}
            suffix={suffix}
            prefix={prefix}
        />
    </Col>
);

const DeviceCard = () => {
    return (
        <Card
            title="Bed room"
            style={{ width: 450 }}
            extra={<Button>Edit</Button>}
        >
            <Row gutter={16}>
                <StatisticCol
                    title="Temperature"
                    value={22}
                    suffix="&deg;C"
                    prefix={<i className="fas fa-temperature-empty mr-1"></i>}
                />

                <StatisticCol
                    title="Humidity"
                    value={93}
                    suffix="/ 100"
                    prefix={<i className="fas fa-tint mr-1"></i>}
                />
            </Row>
            <Row gutter={16}>
                <StatisticCol
                    title="Battery"
                    value={13}
                    suffix="%"
                    prefix={<i className="fas fa-battery-half mr-1"></i>}
                />
                <Col span={12}>
                    <Statistic
                        title="Last Updated"
                        valueStyle={{ fontSize: '1rem' }}
                        value={'7:30PM 07-02-2022'}
                        prefix={<i className="fas fa-clock mr-1"></i>}
                    />
                </Col>
            </Row>
        </Card>
    );
};

export default DeviceCard;
