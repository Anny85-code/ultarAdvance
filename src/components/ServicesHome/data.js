import construction from '../../assets/hendrexAsset/construction.png';
import generalcontracting from '../../assets/hendrexAsset/png-contractors.png';
import waste from '../../assets/hendrexAsset/wastepng.png';
import generalcontract from '../../assets/hendrexAsset/projectmanage.webp';
import warehousing from '../../assets/hendrexAsset/warehousepng.jpeg';
import transport from '../../assets/hendrexAsset/transportpng.png';

const data = [
  {
    id: 1,
    heading: 'Construction Management',
    content:
      'This involves managing the construction process, including coordinating contractors and subcontractors.',
    to: '/',
    icon: construction,
  },
  {
    id: 2,
    heading: 'General contracting',
    content:
      'This involves overseeing the construction of a project from start to finish.',
    to: '/',
    icon: generalcontracting,
  },
  {
    id: 3,
    heading: 'Collection and transportation of waste',
    content:
      'This includes collecting and transporting waste materials to disposal facilities.',
    to: '/',
    icon: waste,
  },
  {
    id: 4,
    heading: 'Project management',
    content:
      'This includes managing the planning, design, and construction of construction projects.',
    to: '/',
    icon: generalcontract,
  },
  {
    id: 5,
    heading: 'Customs clearance',
    content:
      'Managing the documentation and legal requirements for importing and exporting goods across international border.',
    to: '/',
    icon: warehousing,
  },
  {
    id: 6,
    heading: 'Freight forwarding',
    content:
      'Coordinating the shipment of goods and materials from one location to another, typically across international borders.',
    to: '/',
    icon: transport,
  },
];

export default data;