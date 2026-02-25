// Custom project descriptions based on real document analysis
// Format: { projectId: { description, technologies, deliverables } }

const PROJECT_DESCRIPTIONS = {
    // ============================================================================
    // NETWORKS & TELECOMMUNICATIONS
    // ============================================================================

    "telecomunicaciones-redes-lan-inalambrica-y-cableada": "Design and implementation of a 3-layer enterprise network infrastructure (core, distribution, access) using wired and wireless LAN technologies. VLANs were configured for traffic segmentation, redundancy protocols (HSRP/VRRP), and security via port-security and 802.1X. The project included 29 hands-on labs in Cisco Packet Tracer simulating real enterprise scenarios with multilayer switches, routers, and wireless access points. The outcomes were functional topologies with QoS implemented, active security policies, and complete technical documentation of configurations.",

    "telecomunicaciones-redes-principios-de-enrutamiento": "Implementation of static and dynamic routing solutions for scalable enterprise networks. Hierarchical 3-layer topologies were designed with multi-area OSPF and EIGRP protocols, including route summarization, inter-protocol redistribution, and convergence optimization. The project covered standard and extended ACL configuration, NAT/PAT for address translation, and systematic troubleshooting of connectivity issues. 29 hands-on labs were conducted in Packet Tracer simulating corporate networks with multiple remote sites. Results include fully functional networks with optimized routing tables, implemented security policies, and configuration documentation.",

    "telecomunicaciones-redes-ciberseguridad-e-iot": "Implementation of security strategies for IoT environments and data networks. Communication protocols (MQTT, CoAP) and their vulnerabilities were analyzed, and mitigation measures against common attacks (Sniffing, Spoofing, DDoS) were designed. The project included configuring firewalls, VPNs, and intrusion detection systems (IDS) to protect connected devices. Attack and defense simulations were conducted in controlled environments, and wireless sensor networks were secured. Results include risk analysis reports, IoT device hardening guides, and secure network topologies.",

    "telecomunicaciones-redes-sistemas-de-informacion-geografica": "Spatial analysis and territorial modeling using GIS tools (QGIS, ArcGIS). Vector and raster layers were processed for land-use planning, environmental impact studies, and cadastral mapping. The project included image georeferencing, map digitization, overlay analysis, creation of digital elevation models (DEM), and generation of thematic cartography. Data from various sources (GPS, remote sensors, Excel tables) were integrated for spatial decision-making. Results are professional thematic maps, normalized geographic databases, and spatial analysis reports.",

    "telecomunicaciones-redes-telemetria": "Design of telemetry and SCADA systems for remote monitoring of industrial variables. Sensors, remote terminal units (RTUs), and wireless communication systems were integrated for data transmission. The project covered HMI interface design for real-time visualization, alarm configuration, and historical data storage. Communication links were simulated and industrial protocols were implemented. Deliverables include telemetry architecture diagrams, monitoring interface prototypes, and communication link feasibility analysis.",

    "telecomunicaciones-redes-diplomado-linux": "Advanced administration of GNU/Linux server operating systems. Tasks included user and group management, file permission configuration, process administration, and Bash script automation. The project included implementing network services such as Apache/Nginx (Web), SSH (Remote Access), and firewalls (iptables/UFW). Security and system resource monitoring solutions were deployed. Results include configured and secured Linux servers, administration procedure documentation, and functional automation scripts.",

    "telecomunicaciones-redes-sistemas-operativos": "Management and administration of resources in modern operating systems. Process scheduling algorithms, virtual memory management, and file systems were analyzed. The project included installation, configuration, and optimization of Windows and Linux systems, as well as troubleshooting performance and security issues. Backup and disaster recovery policies were implemented. Deliverables include installation manuals, performance monitoring reports, and system administration guides.",

    // ============================================================================
    // ELECTRONICS & CONTROL
    // ============================================================================

    "electronica-control-electronica-de-potencia": "Complete design of a three-phase SPWM (Sinusoidal Pulse Width Modulation) inverter and a Variable Frequency Drive (VFD) for induction motor control. The mathematical model of the inverter was developed with THD (Total Harmonic Distortion) analysis below 5%, LC filter design for harmonic reduction, and AC-DC-AC conversion stages. The project included MATLAB/Simulink simulations of unipolar and bipolar modulation strategies, FFT calculations for spectral analysis, and V/f control system design for the drive. Results include dimensioned power circuits with IGBTs, implemented PWM control schematics, and a complete analysis of motor behavior under different load conditions.",

    "electronica-control-automatas-programables": "Development of industrial automation solutions using PLCs for manufacturing processes and machinery control. Programs were designed in Ladder language and functional blocks (FBD) for sequential process control, motor start systems, level and temperature control, and automated production lines. The project included identifying sensors and actuators, functional block diagram design, programming in PLC simulation software, and functional testing. Results include working Ladder programs for multiple industrial scenarios, I/O technical documentation, and validated simulations of automated processes.",

    "electronica-control-control-digital": "Design and implementation of digital control systems for dynamic processes. Plants were modeled in discrete time using the Z-Transform, and digital PID controllers, pole placement controllers, and state observers were designed. The project included extensive MATLAB/Simulink simulations to validate stability and transient response, and implementation of control algorithms on microcontrollers (PIC/Arduino) for motor and temperature control. Results include stable control systems with optimized response, documented source code, and a comparative analysis between continuous and digital control.",

    "electronica-control-instrumentacion-industrial": "Detail engineering for instrumentation and control systems of industrial processes. Sensors, transmitters, and final control elements (valves) were selected and specified under ISA-5.1 standards. The project included creating P&ID (Piping and Instrumentation Diagrams), loop diagrams, and instrument data sheets. Control strategies were designed for variables such as pressure, flow, level, and temperature. Deliverables are standardized instrumentation drawings, valve sizing calculations, and equipment technical specifications.",

    "electronica-control-tratamiento-digital-de-senales": "Design and simulation of digital filters (FIR/IIR) and signal processing systems. Mathematical tools (MATLAB/Simulink) were used for spectral analysis (FFT), noise filtering, and signal modulation. The project included the design of low-pass, high-pass, and band-pass filters using windowing methods and bilinear transformations, validating their frequency and phase response. Audio and basic image processing algorithms were implemented. Results include filter design scripts, real-time processing simulations, and a comparative performance analysis of different filter architectures.",

    "electronica-control-microprocesadores-y-microcontroladores": "Design of embedded systems based on microcontrollers and microprocessors. Hardware and firmware were developed for control and monitoring applications using Assembly and C languages. The project included interface circuit design, programming of peripherals (ADC, Timers, UART, GPIO), and interrupt routine development. Functional prototypes were implemented in Proteus simulations and on development boards (Arduino/Raspberry Pi). Deliverables include commented source code, schematic diagrams, and operational simulations.",

    "electronica-control-sistemas-dinamicos": "Mathematical modeling and analysis of dynamic systems in the time and frequency domain. Differential equations and transfer functions were obtained for mechanical, electrical, and electromechanical systems. The project included transient response, stability, and steady-state error analysis using MATLAB/Simulink. Systems were represented in state space and models were validated through simulation. Results are precise mathematical models, time-domain/frequency-domain response plots, and system behavior analysis.",

    "electronica-control-analisis-de-circuitos": "Analysis and design of DC and AC electrical circuits. Fundamental laws (Ohm, Kirchhoff) and network theorems (Thévenin, Norton, Superposition) were applied to solve complex circuits. The project included frequency response, resonance, and power analysis in RLC circuits. Simulations were performed in CAD tools (Proteus/Multisim) to validate theoretical calculations. Deliverables include detailed calculation reports, circuit schematics, and simulation results compared against theory.",

    "electronica-control-fisica-electronica": "Fundamentals of analog and digital electronics applied to the design of basic circuits. Semiconductor components (diodes, BJT/FET transistors) and combinational logic circuits (gates, multiplexers) were studied. The project included design and simulation of power supplies, basic amplifiers, and digital counters. Laboratory practices were simulated to verify device operation. Results include lab reports with measurements, characteristic curve analysis, and functional designs of elementary circuits.",

    // ============================================================================
    // SOFTWARE & DATA
    // ============================================================================

    "software-datos-evaluacion-de-software": "Implementation of software testing and quality assurance methodologies following IEEE 829 and ISO/IEC 25010 standards. Functional, integration, system, and acceptance tests were executed on real applications, with code coverage analysis exceeding 85%. The project included test case design with a traceability matrix, automated test execution, defect identification and documentation, and quality metric analysis (cyclomatic complexity, maintainability). Tools such as JUnit for unit testing, Selenium for UI testing, and SonarQube for static code analysis were used. Results include 27 technical test execution documents, severity-classified bug reports, and quality improvement recommendations.",

    "software-datos-big-data": "Implementation of Big Data infrastructure for processing and analyzing large volumes of information. Hadoop and Spark clusters were deployed on Linux for distributed processing, and NoSQL databases (MongoDB) were used for unstructured data storage. The project included master/slave node configuration, ETL (Extract, Transform, Load) processing script development, and analysis of massive datasets. Map-reduce practices and Hive/Pig queries were performed. Results include a functional cluster, operational data pipelines, and trend analysis reports on large datasets.",

    "software-datos-bases-de-datos-avanzada": "Design and administration of robust and scalable relational database solutions. Complex schemas were implemented with referential integrity, triggers, stored procedures, and materialized views in Oracle/PL-SQL. The project covered query optimization (tuning), transaction management, user and role security, and backup/recovery plans. A complete solution was developed for a business case study, from entity-relationship modeling to physical implementation and change control. Deliverables include SQL DDL/DML scripts, a data dictionary, and security and maintenance policy documentation.",

    "software-datos-bases-de-datos-basico": "Fundamentals of relational database design and implementation. The Entity-Relationship (ER) model was applied for conceptual data modeling and normalization up to the third normal form (3NF). The project included creating schemas in SQL, data insertion, and developing basic and complex queries (Joins, Aggregations). Database management software (MySQL/PostgreSQL) was used for practical implementation. Results are validated ER diagrams, SQL creation and data manipulation scripts, and functional queries for business requirements.",

    "software-datos-software-avanzado-para-ingenieria": "Development of virtual instruments and data acquisition systems using LabVIEW. Applications were implemented with state machine architecture, event handling, and modular programming (SubVIs). The project included ergonomic graphical user interface (GUI) design, signal acquisition from simulated sensors, real-time data processing, and automatic report generation. Solutions such as complex calculators, environmental monitoring systems, and process controllers were developed. Deliverables include functional VIs, standalone executables, and user documentation.",

    "software-datos-diseno-de-sitios-web": "Development of responsive web applications using HTML5, CSS3, and modern frameworks. User-centered designs (UX/UI) were implemented with flexible layouts (Flexbox/Grid) and mobile device adaptability. The project included creating semantic structures, custom visual styles, basic JavaScript interactivity, and multimedia resource optimization. Accessibility and on-page SEO best practices were applied. Results are functional, visually appealing websites validated across multiple browsers.",

    "software-datos-estructuras-de-datos": "Implementation and analysis of linear and non-linear data structures in high-level languages (Java/C++/C#). Applications were developed using arrays, linked lists, stacks, queues, and binary trees. The project included algorithmic complexity analysis and selection of efficient structures for specific problems. Graphical interfaces were designed for visual manipulation of structures. Deliverables include modular source code, class documentation, and data management application executables.",

    "software-datos-programacion-orientada-a-objetos": "Software development under the Object-Oriented Programming (OOP) paradigm. Concepts of encapsulation, inheritance, polymorphism, and abstraction were applied in designing robust solutions. The project included UML class modeling, implementation in Java/C#, database connectivity, and exception handling. A final integrative project was developed that solves a real business problem. Results are modular, maintainable, and documented applications with data persistence and well-structured business logic.",

    "software-datos-computacion-grafica": "Development of interactive 2D and 3D graphical applications using graphics APIs (Java 3D/OpenGL). Geometric transformation, rendering, lighting, and object texturing algorithms were implemented. The project included creating virtual scenarios, animations, and 3D model visualization. Solutions were developed for data representation and simulated environments. Deliverables include graphical application source code, algorithm implementation reports, and visual demonstrations of created scenarios.",

    // ============================================================================
    // MANAGEMENT & BUSINESS
    // ============================================================================

    "gestion-negocio-contabilidad-y-costos": "Financial and accounting analysis of business operations with a focus on product costing and decision-making. Job-order and process costing systems were developed, along with break-even analysis, master budgets, and financial statements. The project included preparing balance sheets, income statements, cash flows, and financial indicator analysis (liquidity, profitability, debt). Advanced spreadsheets with automated financial models, pivot tables for multidimensional analysis, and KPI dashboards were used. Results include implemented costing models, budget variance analysis, and data-driven financial recommendations.",

    "gestion-negocio-ingenieria-economica": "Economic evaluation of investment projects using cash flow analysis and financial decision criteria. Net present value (NPV), internal rate of return (IRR), benefit/cost ratio, and payback period methods were applied to evaluate investment alternatives. The project included sensitivity analysis, risk and uncertainty evaluation, and decision optimization under budget constraints. Excel models with financial functions, amortization tables, and scenario analysis were developed. Results include economic feasibility studies, comparison of investment alternatives, and quantitative decision recommendations.",

    "gestion-negocio-formulacion-evaluacion-proyectos": "Comprehensive formulation of investment projects from opportunity identification to financial and social evaluation. Market, technical, organizational, and financial studies were prepared for business projects. The project included building projected cash flows, NPV/IRR evaluation, sensitivity and risk analysis, and complete business plan creation. Project management tools and financial modeling were used. Deliverables include structured project documents, validated financial models, and executive presentations of investment proposals.",

    // ============================================================================
    // SOFTWARE & DATA - ADDITIONAL
    // ============================================================================

    "software-datos-inteligencia-artificial": "Implementation of supervised and unsupervised machine learning algorithms for solving classification, regression, and clustering problems. Neural network, decision tree, k-means, and genetic algorithm models were developed. The project included data preprocessing, feature selection, model training, cross-validation, and hyperparameter optimization. Python with scikit-learn, TensorFlow, and pandas libraries was used to analyze real datasets. Results include predictive models with accuracy above 85%, result visualizations, and a comparative performance analysis of algorithms.",

    "software-datos-arquitectura-computadores": "Design and analysis of computer architectures at the hardware and internal organization level. Processor components (ALU, control unit, registers), memory hierarchy (cache, RAM, storage), and performance improvement techniques (pipelining, branch prediction) were studied. The project included digital circuit simulation, assembly language programming, and system performance analysis. Simulation tools such as Logisim and MARS were used to validate designs. Deliverables include simplified processor designs, optimized assembly programs, and performance metric analysis (CPI, throughput).",

    "software-datos-automatas-lenguajes-formales": "Design and implementation of finite automata, pushdown automata, and Turing machines for formal language recognition. Context-free grammars, regular expressions, and lexical/syntactic analyzers were developed. The project included building simplified compilers, converting between automata representations, and proving language properties. JFLAP was used for automata simulation and Python/Java for parser implementation. Results include functional automata for pattern recognition, implemented syntactic analyzers, and formal documentation of designed languages.",

    "software-datos-diseno-bases-datos": "Conceptual, logical, and physical design of relational databases for enterprise information systems. The Extended Entity-Relationship (EER) model, normalization to BCNF, and schema optimization were applied. The project included identifying entities, relationships, and integrity constraints, transforming to the relational model, and creating DDL/DML scripts. Indexes, views, and stored procedures were designed for query optimization. Deliverables include professional ER diagrams, a complete data dictionary, documented SQL scripts, and query performance analysis.",

    "software-datos-ingenieria-software": "Application of software development methodologies for complete projects from requirements analysis to deployment. Agile (Scrum) and traditional (RUP) methodologies were used for project management. The project included use case elaboration, UML diagrams (class, sequence, activity), software architecture design, and design patterns (MVC, Singleton, Factory). Functional applications with unit and integration tests were developed. Results include complete technical documentation (SRS, SDD), source code versioned in Git, and deployed applications.",

    "software-datos-lenguaje-modelado-uml": "Modeling of software systems using UML 2.0 for analysis, design, and documentation of architectures. Use case, class, object, sequence, collaboration, state, activity, component, and deployment diagrams were created. The project included complete modeling of enterprise systems, application of design patterns, and code generation from models. CASE tools such as Enterprise Architect and Visual Paradigm were used. Deliverables include complete and consistent UML models, software architecture documentation, and traceability between requirements and design.",

    "software-datos-programacion-lineal": "Formulation and solution of linear optimization problems for decision-making in business and industrial contexts. Resource allocation, product mix, transportation, and production planning problems were modeled. The project included building mathematical models with objective function and constraints, solving using the simplex method, and sensitivity analysis. Tools such as Excel Solver, LINGO, and Python (PuLP) were used for optimization. Results include validated optimal solutions, slack variable analysis, and model-based decision recommendations.",

    "software-datos-metodos-numericos": "Implementation of numerical algorithms for solving mathematical problems using computational methods. Methods for solving nonlinear equations (bisection, Newton-Raphson), linear equation systems (Gauss, Gauss-Seidel), interpolation, numerical integration, and solving differential equations (Euler, Runge-Kutta) were developed. The project included convergence, error, and stability analysis of methods. Programming was done in MATLAB and Python with result validation. Deliverables include documented source code, comparative method analysis, and engineering problem applications.",

    // ============================================================================
    // NETWORKS & TELECOMMUNICATIONS - ADDITIONAL
    // ============================================================================

    "telecomunicaciones-redes-diplomado-ccnp": "Advanced enterprise network configuration following the Cisco CCNP curriculum (Routing and Switching). Advanced routing technologies (multi-area OSPF, EIGRP, BGP), multilayer switching (VLANs, VTP, STP, RSTP), and high availability (HSRP, VRRP, GLBP) were implemented. The project included designing scalable hierarchical networks, implementing QoS for traffic prioritization, and systematic troubleshooting of complex issues. Hands-on labs were conducted on real Cisco equipment and Packet Tracer with enterprise topologies. Results include functional corporate networks with redundancy, active QoS policies, and technical configuration documentation.",

    "telecomunicaciones-redes-diseno-redes-acceso-ngn": "Design of next-generation access networks (NGN) for triple-play service provisioning (voice, video, data). FTTH (Fiber To The Home), HFC (Hybrid Fiber-Coaxial), and last-mile wireless networks were dimensioned. The project included optical power budget calculation, PON topology design (GPON, EPON), and bandwidth capacity planning. Optical network simulation tools and outside plant design software were used. Deliverables include detailed network drawings, link calculation reports, equipment technical specifications, and technical-economic feasibility analysis.",

    "telecomunicaciones-redes-diseno-redes-transporte-ngn": "NGN transport network architecture based on IP/MPLS technologies for telecommunications operators. Backbone networks were designed with routing protocols (OSPF, IS-IS, BGP), MPLS-TE traffic engineering, and enterprise VPNs (L2VPN, L3VPN). The project included link capacity dimensioning, resilient topology design with 1+1 protection, and end-to-end QoS planning. Simulations were performed in GNS3 with virtual routers. Results include scalable network architectures, advanced routing configurations, and service availability analysis.",

    "telecomunicaciones-redes-ingenieria-telecomunicaciones": "Analysis and design of telecommunications systems including transmission, modulation, and signal propagation. Analog (AM, FM) and digital (ASK, FSK, PSK, QAM) modulation techniques, channel coding, and communication link analysis were studied. The project included link budget calculation, wireless transmission system design, and performance analysis (BER, SNR). MATLAB and communications simulation tools were used. Deliverables include validated link designs, modulation system simulations, and signal quality analysis.",

    "telecomunicaciones-redes-aplicaciones-telematicas": "Development of distributed applications based on client-server architectures and web services. Network applications were implemented using TCP/UDP sockets, HTTP/HTTPS protocols, and RESTful services. The project included API design, concurrency handling, authentication, and communication security. Chat, file transfer, and remote monitoring applications were developed using Python, Java, and JavaScript (Node.js). Results include deployed functional applications, API documentation, and network performance analysis.",

    // ============================================================================
    // ELECTRONICS & CONTROL - ADDITIONAL
    // ============================================================================

    "electronica-control-robotica": "Design and programming of robotic systems for industrial task automation. Forward and inverse kinematics were applied for manipulator robot motion analysis, trajectory planning, and position control. The project included mathematical robot modeling (Denavit-Hartenberg), simulation in MATLAB/Simulink and RobotStudio, and controller programming. Robotic workcells were designed for pick-and-place, welding, and assembly operations. Results include validated kinematic models, implemented control programs, and automated process simulations.",

    "electronica-control-control-predictivo-adaptativo": "Design of advanced MPC (Model Predictive Control) and adaptive controllers for complex industrial processes. Constrained model predictive control algorithms and gain-scheduling adaptive controllers were implemented. The project included process model identification, controller tuning, and validation through simulation. Applied to MIMO (multiple input/output) systems and processes with delays. MATLAB with Control System Toolbox was used. Results include optimized controllers outperforming conventional PID, robustness analysis, and response simulations.",

    "electronica-control-comunicaciones-industriales-avanzadas": "Implementation of industrial communication networks for integrating automation systems. Profinet, Modbus TCP/RTU, OPC UA, and Ethernet/IP protocols were configured for data exchange between PLCs, HMIs, and SCADA systems. The project included industrial network architecture design, industrial switch configuration, and communication diagnostics. Field devices (sensors, actuators) were integrated with supervisory systems. Results include functional industrial networks, documented communication configurations, and cycle time analysis.",

    "electronica-control-sistemas-embebidos": "Development of embedded systems based on microcontrollers and processors for real-time applications. Hardware was designed with peripherals (ADC, PWM, serial communications), and firmware was programmed in C/C++ with RTOS (FreeRTOS). The project included PCB design, device driver programming, and code optimization for limited resources. Data acquisition, motor control, and IoT communication applications were developed. Deliverables include functional prototypes, optimized source code, and hardware/software technical documentation.",

    "electronica-control-instrumentacion-medica": "Design of biomedical instrumentation systems for measuring and monitoring physiological signals. Conditioning circuits for ECG, EEG, temperature, and blood pressure were implemented. The project included instrumentation amplifier design, analog filters, and data acquisition systems. Electrical safety standards (IEC 60601) and digital biomedical signal processing were applied. Simulation tools (Proteus, Multisim) and development platforms were used. Results include medical device prototypes, signal analysis, and technical specification validation.",

    // ============================================================================
    // ELECTRONICS & CONTROL - MORE PROJECTS
    // ============================================================================

    "electronica-control-control-analogo": "Design of classical analog PID controllers for process control systems. Tuning methods (Ziegler-Nichols, Cohen-Coon) and stability analysis using Routh-Hurwitz criteria and root locus were applied. The project included lead/lag compensator design, frequency response analysis (Bode and Nyquist diagrams), and control system simulation. Controllers were implemented in analog circuits with operational amplifiers. Results include tuned controllers, stability analysis, and system response simulations.",

    "electronica-control-senales-y-sistemas": "Analysis of signals and systems in continuous and discrete time using Fourier and Laplace transforms. Properties of LTI systems (linear and time-invariant), convolution, and frequency response were studied. The project included signal spectral analysis, analog and digital filter design, and signal sampling. MATLAB was used for simulation and visualization. Deliverables include mathematical signal analysis, validated filter designs, and communication system simulations.",

    "electronica-control-instrumentacion": "Design of measurement and data acquisition systems for physical variables (temperature, pressure, flow, level). Appropriate transducers and sensors were selected, signal conditioning circuits were designed, and data acquisition systems with microcontrollers were implemented. The project included instrument calibration, uncertainty analysis, and measurement validation. Results include functional measurement systems, calibration documentation, and measurement error analysis.",

    "electronica-control-electronica-analoga": "Design and analysis of analog electronic circuits with BJT and FET transistors. Small-signal amplifiers, power amplifiers, regulated power supplies, and oscillators were implemented. The project included bias analysis, gain calculation, and frequency response. SPICE simulations and prototype construction were performed. Deliverables include validated circuit designs, performance analysis, and functional prototypes.",

    "electronica-control-electronica-digital": "Design of combinational and sequential digital systems using TTL and CMOS logic. Circuits with logic gates, multiplexers, decoders, flip-flops, counters, and registers were implemented. The project included finite state machine design, Boolean function minimization with Karnaugh maps, and CAD tool simulation. Digital stopwatch, display controller, and counting system projects were developed. Results include optimized designs, functional simulations, and breadboard prototypes.",

    // ============================================================================
    // SOFTWARE & DATA - MORE PROJECTS
    // ============================================================================

    "software-datos-fundamentos-de-programacion": "Development of algorithms and programs using structured programming paradigm. Control structures (conditionals, loops), arrays, functions, and file handling were implemented in languages such as Python, C, or Java. The project included algorithmic problem solving, pseudocode and flowchart design, and console application development. Good programming practices and code documentation were applied. Results include functional programs, technical documentation, and algorithmic complexity analysis.",

    "software-datos-programacion": "Development of software applications applying object-oriented and structured programming concepts. Solutions to computational problems were implemented using high-level languages (Python, Java, C#). The project included algorithm design, data structures, exception handling, and user interface development. Data management applications with data persistence were created. Deliverables include modular source code, user documentation, and functional executables.",

    "software-datos-estructuras-de-datos-avanzadas": "Implementation and analysis of linear and non-linear data structures in high-level languages (Java/C++/C#). Applications were developed using arrays, linked lists, stacks, queues, binary trees, and graphs. The project included algorithmic complexity analysis (Big O) and selection of efficient structures for specific problems. Graphical interfaces were designed for visual structure manipulation. Deliverables include modular source code with over 1,700 files, class documentation, and data management application executables.",

    "software-datos-base-de-datos-avanzada": "Design and administration of robust and scalable relational database solutions. Complex schemas were implemented with referential integrity, triggers, stored procedures, and materialized views in Oracle/PL-SQL. The project covered query optimization (tuning), transaction management, user and role security, and backup/recovery plans. A complete solution was developed for a business case study. Deliverables include SQL DDL/DML scripts, a data dictionary, and security and maintenance policy documentation.",

    "software-datos-software-avanzado-para-ingenieria-labview": "Development of virtual instruments and data acquisition systems using LabVIEW. Applications were implemented with state machine architecture, event handling, and modular programming (SubVIs). The project included ergonomic GUI design, simulated sensor signal acquisition, real-time data processing, and automatic report generation. Solutions such as complex calculators, environmental monitoring systems, and process controllers were developed. Deliverables include functional VIs with over 300 files, standalone executables, and user documentation.",

    "software-datos-computacion-grafica-avanzada": "Development of interactive 2D and 3D graphical applications using graphics APIs (Java 3D/OpenGL). Geometric transformation, rendering, lighting, and object texturing algorithms were implemented. The project included creating virtual scenarios, animations, and 3D model visualization. Solutions were developed for data representation and simulated environments. Deliverables include graphical application source code with over 480 files, algorithm implementation reports, and visual demonstrations of created scenarios.",

    "software-datos-diseno-de-software": "Application of design patterns and software architectures for developing robust and maintainable systems. Creational (Singleton, Factory), structural (Adapter, Decorator), and behavioral (Observer, Strategy) patterns were implemented. The project included layered architecture design (MVC, MVP), UML documentation, and enterprise application development. Results include well-structured source code, architecture diagrams, and scalable applications.",

    "software-datos-diseno-de-bases-de-datos-avanzado": "Conceptual, logical, and physical design of relational databases for enterprise information systems. The Extended ER model, normalization to BCNF, and schema optimization were applied. The project included entity, relationship, and integrity constraint identification, relational model transformation, and DDL/DML script creation. Indexes, views, and stored procedures were designed for query optimization. Deliverables include professional ER diagrams with over 100 files, a complete data dictionary, documented SQL scripts, and query performance analysis.",

    "software-datos-analisis-de-sistemas": "Analysis and specification of requirements for enterprise information systems. Information gathering techniques (interviews, surveys, observation), business process modeling, and functional and non-functional requirements documentation were applied. The project included use case development, activity diagrams, and software requirements specifications (SRS). Results include complete analysis documentation, process models, and requirements validated with stakeholders.",

    // ============================================================================
    // NETWORKS - MORE PROJECTS
    // ============================================================================

    "telecomunicaciones-redes-fundamentos-de-redes": "Design and implementation of local area networks (LAN) and wide area networks (WAN) using the OSI and TCP/IP models. Network devices (switches, routers) were configured, basic routing protocols (RIP, OSPF) were implemented, and subnetting and VLSM concepts were applied. The project included network topology design, service configuration (DHCP, DNS), and connectivity troubleshooting. Hands-on labs were conducted in Packet Tracer. Results include functional networks, configuration documentation, and network traffic analysis.",

    "telecomunicaciones-redes-conmutacion": "Configuration of Layer 2 and Layer 3 switches for enterprise networks. VLANs, trunking (802.1Q), Spanning Tree Protocol (STP/RSTP/MSTP), and link aggregation (EtherChannel) were implemented. The project included hierarchical network design, traffic segmentation, and convergence optimization. Cisco switches were configured with port-security and VLAN access control lists (VACLs). Results include functional switching topologies with over 330 configuration files, redundancy, and technical documentation.",

    "telecomunicaciones-redes-acceso-a-la-wan": "Design of WAN connectivity solutions for interconnecting remote sites. WAN access technologies (Frame Relay, PPP, HDLC), site-to-site VPNs with IPsec, and address translation services (NAT/PAT) were configured. The project included hub-and-spoke topology design, dynamic routing over WAN, and bandwidth optimization. Results include functional WAN networks, secure VPN configurations, and link documentation.",

    "telecomunicaciones-redes-seguridad-de-redes-de-telecomunicaciones": "Implementation of security measures for telecommunications network protection. Firewalls (ACLs, ASA), intrusion prevention systems (IPS), and 802.1X authentication were configured. The project included vulnerability analysis, network device hardening, and security policy design. Remote-access VPNs and network segmentation with security zones (DMZ) were implemented. Results include secured networks with over 90 files, documented security policies, and risk analysis.",

    "telecomunicaciones-redes-fundamento-de-redes-locales-inalambricas": "Design and implementation of enterprise wireless networks (WLAN) following IEEE 802.11 standards. Access points (AP), wireless controllers (WLC), and WPA2/WPA3-Enterprise security were configured. The project included RF coverage design, channel planning, and roaming between APs. Guest networks with traffic isolation were implemented. Results include functional WLANs, coverage maps, and security configurations.",

    "telecomunicaciones-redes-sistemas-de-comunicaciones": "Analysis of analog and digital communication systems. Modulation techniques (AM, FM, PM, ASK, FSK, PSK), multiplexing (FDM, TDM), and channel coding were studied. The project included link budget calculation, noise and distortion analysis, and transmission system design. Simulation tools were used to validate designs. Results include communication system designs with over 450 files, modulation simulations, and performance analysis.",

    "telecomunicaciones-redes-redes-y-comunicaciones": "Comprehensive design of data networks and communications for enterprise environments. Networking solutions were implemented including routing, switching, security, and network services. The project covered scalable topology design, dynamic routing protocol implementation (OSPF, EIGRP), and service configuration (DNS, DHCP, FTP). Results include functional corporate networks, architecture documentation, and performance analysis.",

    // ============================================================================
    // MANAGEMENT - MORE PROJECTS
    // ============================================================================

    "gestion-negocio-gestion-de-ti": "Application of ITIL and COBIT frameworks for IT service management. Incident, problem, change, and configuration management processes were designed. The project included service catalog development, service level agreements (SLAs), and performance metrics (KPIs). Best practices were implemented for IT alignment with business objectives. Results include ITIL process documentation, service management policies, and continuous improvement plans.",

    "gestion-negocio-gestion-tecnologica": "Innovation and technology transfer management in organizations. Technology watch, prospective analysis, and R&D project management methodologies were applied. The project included evaluation of emerging technologies, technology readiness level analysis (TRL), and adoption strategy design. Technology roadmaps and innovation plans were developed. Results include technology trend studies with over 130 files, decision matrices, and innovation strategies.",

    "gestion-negocio-formulacion-integral-de-proyectos": "Complete project formulation following PMI and PRINCE2 methodologies. Pre-feasibility and feasibility studies were prepared including market, technical, organizational, legal, environmental, and financial analysis. The project included cash flow modeling, economic evaluation (NPV, IRR, B/C), sensitivity and risk analysis. Deliverables include complete project documents, financial models, and executive presentations.",

    "gestion-negocio-gestion-integral-de-proyectos-i": "Application of project management methodologies for planning and control. Scope, time, cost, quality, human resources, communications, risk, and procurement management tools were used. The project included project charter, WBS, schedules (Gantt, PERT/CPM), and budgets. Earned Value Management (EVM) techniques were applied for control. Results include complete project plans with over 50 files, detailed schedules, and risk matrices.",

    "gestion-negocio-metodologias-de-gestion-de-proyectos": "Comparison and application of agile (Scrum, Kanban) and traditional (Waterfall, PRINCE2) project management methodologies. Agile ceremonies (daily standups, sprint planning, retrospectives), Kanban boards, and traditional project documentation were implemented. The project included selecting the appropriate methodology based on project context. Results include projects managed with different methodologies, performance metrics, and lessons learned.",

    // ============================================================================
    // ENVIRONMENTAL & ENERGY
    // ============================================================================

    "ambiental-energia-acustica-ambiental": "Characterization and evaluation of environmental noise sources following Colombian regulations (Resolution 0627 of 2006). Sound pressure level measurements were taken with calibrated sound level meters, with frequency analysis and noise mapping. The project included identifying emission sources, calculating acoustic indicators (Leq, L10, L90), and proposing mitigation measures. Technical reports were prepared with a comparative analysis against permissible limits and noise control recommendations.",

    "ambiental-energia-biodiversidad-y-servicios-ecosistemicos": "Assessment of biodiversity and ecosystem services in areas of environmental interest. Flora and fauna sampling methodologies, diversity index calculation (Shannon, Simpson), and ecosystem service valuation (provisioning, regulating, cultural) were applied. The project included transect design, taxonomic identification, statistical analysis of ecological data, and conservation plan development. Results include biodiversity inventories, species distribution maps, and sustainable management strategies.",

    "ambiental-energia-fisicoquimica-ambiental": "Physicochemical analysis of environmental matrices (water, soil, air) for environmental quality assessment. Instrumental analytical techniques (spectrophotometry, chromatography, titration) were applied to determine parameters such as pH, BOD, COD, heavy metals, and organic pollutants. The project included standardized protocol sampling, laboratory analysis, analytical quality control, and comparison with environmental regulations. Results include analysis reports, data interpretation, and treatment recommendations.",

    "ambiental-energia-ingenieria-ambiental": "Design of environmental management systems under ISO 14001 for organizations. An initial environmental diagnosis was performed, environmental aspects and impacts identified, and environmental objectives and targets established. The project included management program development, operational procedures, and monitoring and measurement plans. Environmental impact assessment matrices, environmental performance indicators, and management system documentation were developed.",

    // ============================================================================
    // AGRO & BIO
    // ============================================================================

    "agro-bio-biologia": "Study of fundamental biological processes and biotechnological applications. In vitro culture protocols, plant micropropagation, and molecular biology techniques (PCR, electrophoresis) were implemented. The project included culture medium design, aseptic condition establishment, and explant growth and development analysis. Results include optimized propagation protocols, viability analysis, and biotechnological procedure documentation.",

    "agro-bio-fisiologia-vegetal": "Analysis of physiological processes in plants and their response to environmental factors. Mechanisms of photosynthesis, respiration, water and nutrient transport, and stress responses were studied. The project included physiological parameter measurements, growth and development analysis, and adaptation evaluation. Results include physiological response curves, photosynthetic efficiency analysis, and agronomic management strategies.",

    "agro-bio-quimica-de-alimentos": "Development and evaluation of food transformation processes. Unit operations (pasteurization, dehydration, fermentation) were applied for food preservation and improvement. The project included formulation design, process parameter control, sensory and physicochemical product analysis. Shelf-life testing, process optimization, and innovative value-added product development were performed.",

    "agro-bio-fitopatologia": "Diagnosis and integrated management of crop diseases. Pathogens were identified through laboratory techniques (microscopy, culture, molecular tests), disease severity evaluated, and control strategies designed. The project included field monitoring, epidemiological analysis, and integrated management plan development combining cultural, biological, and chemical control. Results include diagnostic protocols, disease distribution maps, and management recommendations.",

    // ============================================================================
    // HEALTH & SOCIAL
    // ============================================================================

    "salud-social-psicologia": "Design and implementation of psychosocial intervention programs for vulnerable populations. Psychological evaluation techniques, therapeutic workshop design, and psychosocial support strategies were applied. The project included needs assessment, evidence-based intervention planning, and program impact evaluation. Results include intervention protocols, evaluation instruments, and psychosocial follow-up reports.",

    "salud-social-salud-publica": "Epidemiological analysis and design of health promotion and disease prevention programs. Disease prevalence and incidence studies, risk factor identification, and community intervention strategy design were conducted. The project included epidemiological data collection and analysis, public health campaign design, and health program evaluation. Results include population health diagnostics, intervention plans, and educational materials.",

    "salud-social-psicologia-de-la-personalidad": "Study of personality theories and psychological assessment. Psychometric instruments (inventories, scales, projective tests) were applied for personality trait and psychological characteristic evaluation. The project included test administration, result analysis, profile interpretation, and psychological report development. Results include complete assessments, case analyses, and intervention recommendations.",

    "salud-social-comunidad": "Diagnosis and development of community intervention projects. Participatory methodologies were applied for needs identification, social program design, and organizational strengthening. The project included fieldwork, community workshops, social problem analysis, and development strategy design. Results include participatory diagnostics, community action plans, and social impact evaluation.",

    // ============================================================================
    // INTERDISCIPLINARY
    // ============================================================================

    "interdisciplinario-metodologia-de-la-investigacion": "Development of applied research projects with rigorous scientific methodology. Research problems were formulated, theoretical and methodological frameworks were designed, and data collection and analysis plans were executed. The project included systematic literature review, experimental design, statistical result analysis, and scientific article writing. Results include research reports, data analysis, and application proposals for findings.",

    "interdisciplinario-diseno-experimental": "Design and analysis of experiments for applied research. Completely randomized, block, factorial, and response surface designs were applied. The project included experimental planning, data collection, statistical analysis (ANOVA, regression), and process optimization. Results include complete experimental designs, variance analysis, predictive models, and optimization recommendations.",

    "interdisciplinario-seminario-de-investigacion": "Formulation and development of research proposals in specialized areas. Research pre-proposals were developed with problem statement, objectives, theoretical framework, methodology, and timeline. The project included literature review, methodological design, and data collection and analysis technique selection. Results include complete research proposals, methodological protocols, and progress presentations.",

    "interdisciplinario-etica": "Analysis of ethical dilemmas in professional and social contexts. Ethical theories, deontological codes, and application cases in engineering and science were studied. The project included case analysis, ethical debates, code of conduct development, and ethical decision-making protocol design. Results include ethical dilemma analyses, resolution proposals, and professional conduct guides.",

    // ============================================================================
    // ENVIRONMENTAL & ENERGY - ADDITIONAL
    // ============================================================================

    "ambiental-energia-balance-masico-y-energetico-en-prob-ambientales": "Application of mass and energy balances to analyze environmental processes. Water treatment systems, atmospheric emissions, and recycling processes were modeled. The project included stoichiometric calculations, open and closed system balances, and energy efficiency analysis. Results include process flow diagrams, calculation reports, and optimization proposals.",

    "ambiental-energia-caracterizacion-de-contaminantes-atmosfericos": "Monitoring and characterization of atmospheric pollutants (PM10, PM2.5, SO2, NOx, CO, O3). Measurements were taken with air quality monitoring equipment, pollutant dispersion analysis was performed, and atmospheric modeling was conducted. The project included comparison with air quality standards and emission control strategy design.",

    "ambiental-energia-caracterizacion-de-fenomenos-meteorologicos": "Analysis of meteorological variables and their impact on environmental processes. Climate patterns, thermal inversion phenomena, wind, and precipitation were studied. The project included meteorological data processing, climatograph development, and climate trend analysis for environmental impact studies.",

    "ambiental-energia-cultivos-de-clima-frio": "Design of agricultural production systems for cold-climate crops (potato, vegetables, highland fruits). Agronomic practices adapted to altitude conditions, frost management, and water resource optimization were planned. The project included variety selection, irrigation system design, and fertilization plans.",

    "ambiental-energia-cultivos-de-clima-medio": "Planning of productive systems for mid-climate crops (coffee, citrus, plantain). Integrated management strategies, pest and disease control, and soil conservation practices were designed. Results include agronomic management plans and sustainability analysis.",

    "ambiental-energia-definicion-de-indicadores-ambientales": "Design of environmental indicator systems for environmental performance assessment. Pressure, state, and response indicators (PER model) were selected for ecosystem and industrial process monitoring. The project included baseline definition, environmental targets, and measurement protocols.",

    "ambiental-energia-diseno-de-plantas-y-equipos-en-ingenieria-ambiental": "Detail engineering for wastewater treatment plants and pollution control systems. Reactors, settlers, filters, and disinfection systems were dimensioned. The project included hydraulic calculations, equipment selection, and engineering drawing preparation.",

    "ambiental-energia-educacion-ambiental": "Design of environmental education programs for communities and organizations. Educational materials, participatory workshops, and awareness campaigns on conservation, recycling, and sustainable resource use were developed. Results include educational guides and environmental training plans.",

    "ambiental-energia-evaluacion-de-riesgos-ambientales": "Quantitative environmental risk assessment for industrial projects. Hazards were identified, probabilities of occurrence estimated, and environmental consequences evaluated. The project included risk matrices, scenario analysis, and prevention and mitigation measure design.",

    "ambiental-energia-fotointerpretacion-y-mapificacion": "Analysis of satellite images and aerial photographs for territorial studies. Photointerpretation of vegetation cover, land use, and water bodies was performed. The project included georeferencing, digitization, and thematic map creation with GIS tools.",

    "ambiental-energia-fuentes-de-energia-alternativas": "Technical and economic evaluation of renewable energy systems (solar, wind, biomass, hydroelectric). Photovoltaic systems, wind turbines, and biodigesters were dimensioned. The project included energy resource analysis, production calculations, and feasibility studies.",

    "ambiental-energia-fundamentos-de-economia": "Economic analysis applied to environmental and energy projects. Cost-benefit evaluations, financial feasibility analysis, and economic valuation of ecosystem services were conducted. The project included NPV, IRR calculations, and sensitivity analysis.",

    "ambiental-energia-implementacion-de-planes-de-manejo-ambiental": "Design and implementation of environmental management plans (EMP) for infrastructure projects. Prevention, mitigation, correction, and impact compensation programs were developed. Results include environmental management sheets and implementation schedules.",

    "ambiental-energia-ingenieria-economica": "Economic evaluation of environmental and energy engineering projects. Investment analysis methodologies, alternative evaluation, and resource optimization were applied. The project included cash flow modeling, financial indicator analysis, and feasibility studies.",

    "ambiental-energia-manejo-de-aguas-residuales-en-pequenas-comunidades": "Design of wastewater treatment systems for rural communities. Primary (septic tanks) and secondary (anaerobic filters, constructed wetlands) treatment systems were dimensioned. The project included water quality analysis, hydraulic calculations, and engineering designs.",

    "ambiental-energia-manejo-de-aguas-subterraneas": "Assessment and management of groundwater resources. Hydrogeological studies, pumping tests, and aquifer modeling were conducted. The project included groundwater quality analysis, well design, and sustainable resource use plans.",

    "ambiental-energia-microbiologia-ambiental": "Study of microorganisms in environmental and biotechnological processes. Microbiological analyses of water, soil, and air were performed, indicator organisms identified, and bioremediation processes evaluated. The project included culture techniques, microscopy, and biochemical tests.",

    "ambiental-energia-modelacion-ambiental": "Development of mathematical models for simulating environmental processes. Pollutant dispersion, water quality, and ecosystem dynamics systems were modeled. The project included specialized software use, model calibration, and scenario analysis.",

    "ambiental-energia-opcion-de-grado-ambiental": "Applied environmental engineering graduation project. Research or practical application work was developed on topics of environmental management, waste treatment, or impact assessment. Results include complete technical documentation and solution proposals for environmental challenges.",

    "ambiental-energia-ordenamiento-territorial": "Territorial planning and land-use management with an environmental focus. Territorial diagnostics, environmental zoning, and land-use planning were conducted. The project included land-use conflict analysis, territorial suitability evaluation, and planning proposals.",

    "ambiental-energia-politica-agraria-y-ambiental": "Analysis of public policies in agrarian and environmental matters. Regulatory frameworks, management instruments, and citizen participation mechanisms were studied. The project included policy evaluation, case analysis, and regulatory improvement proposals.",

    "ambiental-energia-procesos-de-biorremediacion": "Design of bioremediation systems for treating contaminated soils and water. Biostimulation, bioaugmentation, and phytoremediation techniques were evaluated. The project included microorganism selection, bioreactor design, and removal efficiency monitoring.",

    "ambiental-energia-saneamiento-ambiental-urbano-y-rural": "Design of basic sanitation systems for urban and rural communities. Aqueduct, sewerage, solid waste management, and vector control systems were planned. The project included sanitary diagnostics, infrastructure sizing, and management plans.",

    // ============================================================================
    // AGRO & BIO - ADDITIONAL
    // ============================================================================

    "agro-bio-agroforesteria-con-cultivos-anuales-perennes": "Design of agroforestry systems combining annual and perennial crops with forest species. Spatial arrangements, compatible species selection, and integrated management were planned. The project included ecological interaction analysis, silvopastoral system design, and sustainability evaluation.",

    "agro-bio-alimentis": "Development of innovative food products with added nutritional value. Formulations, production processes, and quality analyses were designed. The project included market studies, prototype development, and product sensory evaluation.",

    "agro-bio-bioquimica": "Study of biochemical processes in biological systems. Metabolic pathways, enzymes, and biomolecules were analyzed. The project included laboratory techniques, quantitative analysis, and biotechnological applications of biochemical processes.",

    "agro-bio-competencias-de-cadenas-agroalimentarias": "Analysis of agri-food value chains and business competency development. Production, processing, and marketing links were studied. The project included chain diagnostics, bottleneck identification, and strengthening strategies.",

    "agro-bio-fisiologia-de-cultivos": "Study of physiological processes in economically important crops. Responses to environmental factors, resource use efficiency, and adaptation mechanisms were analyzed. The project included physiological parameter measurements and productive optimization strategies.",

    "agro-bio-fitomejoramiento": "Application of plant genetic improvement techniques. Selections, crosses, and progeny evaluations were performed. The project included improvement experiment design, statistical data analysis, and superior genotype selection.",

    "agro-bio-floricultura": "Production and management of ornamental crops. Greenhouse production systems, irrigation and fertilization management, and pest and disease control were designed. The project included variety selection, production scheduling, and market analysis.",

    "agro-bio-ingenieria-de-plantas-de-alimentos": "Design of food processing plants. Equipment was dimensioned, production lines designed, and quality control systems established. The project included mass and energy balances, layout design, and production cost analysis.",

    "agro-bio-manejo-y-conservacion-de-suelos": "Implementation of agricultural soil conservation practices. Terrace systems, live barriers, and vegetative covers were designed. The project included erosion analysis, management practice evaluation, and degraded soil recovery plans.",

    "agro-bio-nutricion-vegetal": "Design of fertilization programs for crops. Soil and plant tissue analyses, nutritional requirement calculations, and fertilization plans were performed. The project included fertilizer source evaluation and dose optimization.",

    "agro-bio-pastos-y-forrajes": "Establishment and management of pastures for livestock production. Forage species were selected, grazing systems designed, and biomass production evaluated. The project included nutritional quality analysis and pasture management plans.",

    "agro-bio-propagacion-y-micropropagacion-de-plantas": "Application of vegetative propagation and in vitro micropropagation techniques. Disinfection protocols, culture media, and growth conditions were established. The project included mass plant multiplication, explant acclimatization, and viability evaluation.",

    "agro-bio-transferencia-de-calor-ing-alimentos-n": "Analysis of heat transfer processes in food engineering. Heating, cooling, and freezing operations were studied. The project included process time calculations, heat exchanger design, and energy optimization.",

    // ============================================================================
    // HEALTH & SOCIAL - ADDITIONAL
    // ============================================================================

    "salud-social-accion-psicosocial-y-contexto-juridico": "Psychosocial intervention in legal and justice contexts. Victim support programs, forensic psychological assessment, and reparation strategies were designed. The project included case analysis, care protocols, and coordination with justice systems.",

    "salud-social-accion-psicosocial-y-trabajo": "Design of labor welfare and occupational health programs. Organizational climate diagnostics, psychosocial risk assessment, and intervention strategies were conducted. The project included occupational stress prevention workshops and healthy work environment promotion.",

    "salud-social-derechos-humanos-y-derecho-internacional-humanitario": "Analysis of human rights and IHL normative frameworks. Violation cases, protection mechanisms, and international justice systems were studied. The project included legal analysis, advocacy proposals, and rights defense strategies.",

    "salud-social-etica-y-ciudadania": "Training in civic values and social responsibility. Educational programs on civic participation, coexistence, and a culture of peace were designed. The project included community workshops, ethical dilemma analysis, and citizenship-building proposals.",

    "salud-social-interaccion-humano-computador": "Design of people-centered user interfaces. Usability, accessibility, and user experience (UX) principles were applied. The project included prototyping, user testing, and heuristic interface evaluation.",

    "salud-social-modelos-de-intervencion-en-psicologia": "Application of psychological intervention theoretical models (cognitive-behavioral, systemic, humanistic). Intervention plans were designed, therapeutic techniques applied, and outcomes evaluated. The project included case studies and care protocols.",

    "salud-social-salud-oral": "Oral health promotion and oral disease prevention programs. Educational campaigns were designed, epidemiological diagnostics conducted, and community interventions planned. The project included educational materials and dental care plans.",

    "salud-social-sociologia-rural": "Analysis of social dynamics in rural contexts. Community structures, productive systems, and rural development processes were studied. The project included fieldwork, participatory diagnostics, and territorial development proposals.",

    "salud-social-virologia": "Study of viruses and viral diseases. Infection mechanisms, virological diagnosis, and prevention strategies were analyzed. The project included laboratory techniques, epidemiological analysis, and viral disease control program design."
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROJECT_DESCRIPTIONS;
}
