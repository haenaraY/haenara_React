import React from 'react';
import Header from '../componenets/Header';
import Loading from '../componenets/Loading';
import Title from '../componenets/Title';
import '../scss/About.scss';

class About extends React.Component {
    state = {
        isLoading: true,
    };

    getRefer = async () => {
        this.setState({ isLoading: false });
    }


    componentDidMount(){
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    }

    render(){
        const { isLoading } = this.state;
        return (
            <div id="wrap">
                <Header color="gray" />
                { isLoading ? (
                    <Loading color="white" />
                ):(
                    <section id="aboutCont">
            <div className="container">
            <Title text={['About',' Me','About Me']} color="red" />
                <div className="aboutTxt">
                    <div className="word">
                        <div>a</div>
                        <div><span>mbitious</span></div>
                        <span className="ko">야심 찬</span>
                    </div>
                    <div className="word">
                        <div>b</div>
                        <div><span>right</span></div>
                        <span className="ko">빛나는</span>
                    </div>
                    <div className="word">
                        <div>c</div>
                        <div><span>redible</span></div>
                        <span className="ko">믿을 만한</span>
                    </div>
                    <div className="word">
                        <div>D</div>
                        <div><span>iligent</span></div>
                        <span className="ko">근면한</span>
                    </div>
                    <div className="word">
                        <div>e</div>
                        <div><span>arnest</span></div>
                        <span className="ko">성실한</span>
                    </div>
                    <div className="word">
                        <div>f</div>
                        <div><span>aithful</span></div>
                        <span className="ko">충실한</span>
                    </div>
                    <div className="word">
                        <div>g</div>
                        <div><span>enial</span></div>
                        <span className="ko">다정한</span>
                    </div>
                    <div className="word">
                        <div>h</div>
                        <div><span>honest</span></div>
                        <span className="ko">진솔한</span>
                    </div>
                    <div className="word">
                        <div>i</div>
                        <div><span>ndustrious</span></div>
                        <span className="ko">근면한</span>
                    </div>
                    <div className="word">
                        <div>j</div>
                        <div><span>ovial</span></div>
                        <span className="ko">유쾌한</span>
                    </div>
                    <div className="word">
                        <div>k</div>
                        <div><span>ind</span></div>
                        <span className="ko">친절한</span>
                    </div>
                    <div className="word">
                        <div>l</div>
                        <div><span>ikable</span></div>
                        <span className="ko">호감이 가는</span>
                    </div>
                    <div className="word">
                        <div>m</div>
                        <div><span>odest</span></div>
                        <span className="ko">겸손한</span>
                    </div>
                    <div className="word">
                        <div>n</div>
                        <div><span>eat</span></div>
                        <span className="ko">단정한</span>
                    </div>
                    <div className="word">
                        <div>o</div>
                        <div><span>rganized</span></div>
                        <span className="ko">체계적인</span>
                    </div>
                    <div className="word">
                        <div>p</div>
                        <div><span>ositive</span></div>
                        <span className="ko">긍정적인</span>
                    </div>
                    <div className="word">
                        <div>q</div>
                        <div><span>uick-witted</span></div>
                        <span className="ko">눈치가 빠른</span>
                    </div>
                    <div className="word">
                        <div>r</div>
                        <div><span>esponsible</span></div>
                        <span className="ko">책임감있는</span>
                    </div>
                    <div className="word">
                        <div>s</div>
                        <div><span>ociable</span></div>
                        <span className="ko">사교적인</span>
                    </div>
                    <div className="word">
                        <div>t</div>
                        <div><span>ruthful</span></div>
                        <span className="ko">정직한</span>
                    </div>
                    <div className="word">
                        <div>u</div>
                        <div><span>nquestionable</span></div>
                        <span className="ko">의심할 여지없는</span>
                    </div>
                    <div className="word">
                        <div>v</div>
                        <div><span>ivacious</span></div>
                        <span className="ko">생기발랄한</span>
                    </div>
                    <div className="word">
                        <div className="last">w</div>
                        <div><span>eb frontend</span></div>
                        <span className="ko">신입 개발자</span>
                    </div>
                </div>
            </div>
        </section>
                )}
            </div>
        )
    }
}

export default About;