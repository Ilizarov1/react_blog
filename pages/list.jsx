import { Breadcrumb, List } from 'antd';
import Main from '../components/Main';
export default function myList() {
  const [mylist, setMylist] = useState([
    {
      title: 'WEB WEB WEB',
      context:
        'JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript '
    },
    {
      title: 'WEB WEB WEB',
      context:
        'JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript '
    },
    {
      title: 'WEB WEB WEB',
      context:
        'JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript '
    },
    {
      title: 'WEB WEB WEB',
      context:
        'JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript '
    }
  ]);
  return (
    <>
      <Main
        title='List'
        left={
          <>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href='/'>??????</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>??????</Breadcrumb.Item>
            </Breadcrumb>
            <List
              header={<div>????????????</div>}
              itemLayout='vertical'
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <div className={styles['list-title']}>{item.title}</div>
                  <div className={styles['list-icon']}>
                    <span>2021 - 10 - 22</span>
                    <span>????????????</span>
                    <span>?????????</span>
                  </div>
                  <div className={styles['list-context']}>{item.context}</div>
                </List.Item>
              )}
            />
          </>
        }
      />
    </>
  );
}
