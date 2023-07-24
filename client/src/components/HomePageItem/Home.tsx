import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Home.module.css';
import taskpng from "../../assets/prioritize.png"
import projectpng from "../../assets/project.png"
import landpng from "../../assets/land.png"


const Home: React.FC = () => {
    const featureCardAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500 },
    });

    return (
        <div className={styles.homepage}>
            <div className={styles.hero}>
                <div className={styles.typingAnimation}>
                    <h1 className={styles.text}>Welcome to Your <span>PutHub</span></h1>
                </div>
                <p >
                    Manage your projects with ease. Keep track of tasks, resources, and project managers all in one place.
                </p>
            </div>
            <div className={styles.features}>
                <animated.div className={styles.featureCard} style={featureCardAnimation}>
                    <img className={styles.featureIcon} src={taskpng} alt="" />
                    <div>
                        <h3>Task Management</h3>
                        <p>Efficiently manage tasks and track their progress.</p>
                    </div>
                </animated.div>
                <animated.div className={styles.featureCard} style={featureCardAnimation}>
                    <img className={styles.featureIcon} src={projectpng} alt="" />
                    <div>
                        <h3>Project Management</h3>
                        <p>Organize and monitor your projects from start to finish.</p>
                    </div>
                </animated.div>
                <animated.div className={styles.featureCard} style={featureCardAnimation}>
                    <img className={styles.featureIcon} src={landpng} alt="" />
                    <div>
                        <h3>Resource Management</h3>
                        <p>Assign and manage resources for each project efficiently.</p>
                    </div>
                </animated.div>
            </div>
            <div className={styles.imageSection}>
                <img src="https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?w=1060&t=st=1689753278~exp=1689753878~hmac=893e3b809c633d6cd9eff6621810a8e596b416be9f01ac1573e9547b0ec8d023" alt="" />
                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>
                {/* --------------------- */}
                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>
                <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866844.jpg?w=1060&t=st=1689753089~exp=1689753689~hmac=0db5eee859f30ce6f366a68f2561800ef18a699a513eb75021a75076beea28dc" alt="Portfolio Management" />
                {/* --------------------- */}

                <img src="https://img.freepik.com/free-vector/isometric-time-management-concept-illustrated_52683-55734.jpg?w=740&t=st=1689754147~exp=1689754747~hmac=9daee0f392669f5325ac65b367e1915010a231b6fb96f3949c0472a11b65d677" alt="" />
                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>

                {/* --------------------- */}

                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>

                <img src="https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_52683-75727.jpg?w=740&t=st=1689754200~exp=1689754800~hmac=74e396daa8c24d98e9ada31353a12b9c154cd57ece8aab6b0198f1bfdddce380" alt="" />
                {/* --------------------- */}

                <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?w=740&t=st=1689754253~exp=1689754853~hmac=2a351bbf7a1d740da99bef83d126e2bd521064684b3330f6d7d43e929d4026d1" alt="" />
                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>

                {/* --------------------- */}

                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>

                <img style={{ height: '100%' }} src="https://img.freepik.com/free-vector/business-project-delivery-concept-project-development-presentation-idea-project-planning-promotion-management-marketing-flat-vector-illustration_613284-1927.jpg?w=1060&t=st=1689754363~exp=1689754963~hmac=cfff562e85052116f013839da796922855bf634853465a24a6090fb8d32766fc" alt="" />
                {/* --------------------- */}

                <img src="https://img.freepik.com/free-vector/flat-design-kanban-illustration_23-2149337644.jpg?w=740&t=st=1689783056~exp=1689783656~hmac=f347a3800b4fcc55cab4638bc31b054e1c92391cbf64c798ff25cdb49c737a49" alt="" />
                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>

                {/* --------------------- */}

                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>

                <img src="https://img.freepik.com/free-vector/profiling-concept-illustration_114360-5934.jpg?w=740&t=st=1689754504~exp=1689755104~hmac=b49cede7b9907762068d4a2482d4ef7c8079fbaeb1cf91901516b22652affaaf" alt="" />
                {/* --------------------- */}

                <img src="https://img.freepik.com/premium-vector/flat-design-web-page-template-creative-project-management-trendy-illustration-concept-website-mobile-app_171919-189.jpg?w=1060" alt="Portfolio Management" />
                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>
                {/* --------------------- */}

                <div>
                    <h3>Project Management</h3>
                    <p>Efficiently manage all your projects with our portfolio management system. Stay organized and keep track of all your tasks and resources.</p>
                </div>
                <img style={{ height: '100%' }} src="https://img.freepik.com/free-vector/remotely-working-employees-management-isometric-banner-composition-with-camera-time-progress-results-tracking-software_1284-59862.jpg?w=1380&t=st=1689754579~exp=1689755179~hmac=4436ee4ef94da48403c922eaaf95299009c92442a719740d67a24a0999f8957a" alt="" />
            </div>
        </div>
    );
};

export default Home;
