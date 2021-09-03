import {Avatar, Divider} from 'antd';
import { WechatOutlined, GithubOutlined, QqOutlined  } from '@ant-design/icons';
const Author = () =>{
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://avatars.githubusercontent.com/u/61462124?v=4"/>
            </div>
            <div className="author-introduction">
                前端程序员 努力中........
                分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，
                我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，
                其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打
            <Divider>社交账号</Divider>
            <Avatar size={30} icon={<WechatOutlined />} className="account"></Avatar>
            <Avatar size={30} icon={<QqOutlined />} className="account"></Avatar>
            <Avatar size={30} icon={<GithubOutlined />} className="account"></Avatar>
            </div>

        </div>
    )

}
export default Author;