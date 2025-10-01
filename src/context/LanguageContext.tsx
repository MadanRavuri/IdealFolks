import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translation } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'sg', name: 'Singapore', flag: '🇸🇬' },
];

const translations: Translation = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_offices: 'Offices',
    nav_careers: 'Careers',
    nav_contact: 'Contact',
    hero_title: 'Transforming Business Through Innovation',
    hero_subtitle: 'Leading Technology Solutions Across Asia-Pacific',
    hero_description: 'Connecting Singapore, Japan, and India markets with cutting-edge AI solutions and expert technology consulting services.',
    hero_cta: 'Explore Our Services',
    about_title: 'About Our Company',
    about_description: 'We are a premier technology consulting firm with offices in Singapore, Japan, and India, specializing in AI-driven solutions that transform businesses across Asia-Pacific.',
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive technology solutions designed to transform your business across Asia-Pacific markets',
    service_ai_title: 'AI Solutions',
    service_ai_desc: 'Advanced artificial intelligence implementation for business transformation',
    service_software_title: 'Software Development',
    service_software_desc: 'Custom software solutions and application development services',
    service_recruitment_title: 'Recruitment Services',
    service_recruitment_desc: 'Expert IT recruitment and talent acquisition across Asia-Pacific',
    service_consulting_title: 'Technology Consulting',
    service_consulting_desc: 'Strategic technology guidance for market expansion',
    service_integration_title: 'System Integration',
    service_integration_desc: 'Seamless integration of complex technology systems',
    service_market_title: 'Market Bridge',
    service_market_desc: 'Connecting Singapore, Japan, and India business ecosystems',
    offices_title: 'Our Offices',
    singapore_office: 'Singapore Office',
    japan_office: 'Japan Office',
    india_office: 'India Office',
    contact_title: 'Get In Touch',
    contact_description: 'Ready to transform your business with AI? Contact us today.',
    contact_name: 'Full Name',
    contact_email: 'Email Address',
    contact_message: 'Message',
    contact_send: 'Send Message',
    cta_view_all_services: 'View All Services',
    footer_rights: 'All rights reserved.',
  },
  ja: {
    nav_home: 'ホーム',
    nav_about: '会社概要',
    nav_services: 'サービス',
    nav_offices: 'オフィス',
    nav_careers: 'キャリア',
    nav_contact: 'お問い合わせ',
    hero_title: 'イノベーションによるビジネス変革',
    hero_subtitle: 'アジア太平洋地域をリードする技術ソリューション',
    hero_description: 'シンガポール、日本、インドの市場を最先端のAIソリューションと専門的な技術コンサルティングサービスで結びます。',
    hero_cta: 'サービスを見る',
    about_title: '私たちの会社について',
    about_description: 'シンガポール、日本、インドにオフィスを構える一流の技術コンサルティング会社として、アジア太平洋地域の企業を変革するAI主導のソリューションを専門としています。',
    services_title: '私たちのサービス',
    services_subtitle: 'アジア太平洋市場でビジネスを変革するための包括的な技術ソリューション',
    service_ai_title: 'AIソリューション',
    service_ai_desc: 'ビジネス変革のための高度な人工知能実装',
    service_software_title: 'ソフトウェア開発',
    service_software_desc: 'カスタムソフトウェアソリューションとアプリケーション開発サービス',
    service_recruitment_title: '人材採用サービス',
    service_recruitment_desc: 'アジア太平洋地域での専門的なIT人材採用とタレント獲得',
    service_consulting_title: '技術コンサルティング',
    service_consulting_desc: '市場拡大のための戦略的技術指導',
    service_integration_title: 'システム統合',
    service_integration_desc: '複雑な技術システムのシームレスな統合',
    service_market_title: '市場橋渡し',
    service_market_desc: 'シンガポール、日本、インドのビジネス生態系を結ぶ',
    offices_title: '私たちのオフィス',
    singapore_office: 'シンガポール オフィス',
    japan_office: '日本 オフィス',
    india_office: 'インド オフィス',
    contact_title: 'お問い合わせ',
    contact_description: 'AIでビジネスを変革する準備はできていますか？今すぐお問い合わせください。',
    contact_name: '氏名',
    contact_email: 'メールアドレス',
    contact_message: 'メッセージ',
    contact_send: 'メッセージを送信',
    cta_view_all_services: 'すべてのサービスを見る',
    footer_rights: '無断転載を禁じます。',
  },
  te: {
    nav_home: 'హోమ్',
    nav_about: 'గురించి',
    nav_services: 'సేవలు',
    nav_offices: 'కార్యాలయాలు',
    nav_careers: 'కెరీర్స్',
    nav_contact: 'సంప్రదించండి',
    hero_title: 'ఇనోవేషన్ ద్వారా వ్యాపార పరివర్తన',
    hero_subtitle: 'ఆసియా-పసిఫిక్ అంతటా అగ్రగామి టెక్నాలజీ పరిష్కారాలు',
    hero_description: 'సింగపూర్, జపాన్, మరియు భారత మార్కెట్లను అత్యాధునిక AI పరిష్కారాలు మరియు నిపుణ టెక్నాలజీ కన్సల్టింగ్ సేవలతో కలుపుతున్నాము.',
    hero_cta: 'మా సేవలను అన్వేషించండి',
    about_title: 'మా కంపెనీ గురించి',
    about_description: 'మేము సింగపూర్, జపాన్, మరియు భారతదేశంలో కార్యాలయాలు కలిగిన ప్రముఖ టెక్నాలజీ కన్సల్టింగ్ సంస్థ, ఆసియా-పసిఫిక్ ప్రాంతంలో వ్యాపారాలను మార్చే AI-ఆధారిత పరిష్కారాలలో ప్రత్యేకత కలిగి ఉన్నాము.',
    services_title: 'మా సేవలు',
    services_subtitle: 'ఆసియా-పసిఫిక్ మార్కెట్లలో మీ వ్యాపారాన్ని మార్చడానికి రూపొందించిన సమగ్ర టెక్నాలజీ పరిష్కారాలు',
    service_ai_title: 'AI పరిష్కారాలు',
    service_ai_desc: 'వ్యాపార పరివర్తన కోసం అధునాతన కృత్రిమ మేధస్సు అమలు',
    service_software_title: 'సాఫ్ట్‌వేర్ అభివృద్ధి',
    service_software_desc: 'కస్టమ్ సాఫ్ట్‌వేర్ పరిష్కారాలు మరియు అప్లికేషన్ అభివృద్ధి సేవలు',
    service_recruitment_title: 'రిక్రూట్‌మెంట్ సేవలు',
    service_recruitment_desc: 'ఆసియా-పసిఫిక్ అంతటా నిపుణ IT రిక్రూట్‌మెంట్ మరియు టాలెంట్ అక్విజిషన్',
    service_consulting_title: 'టెక్నాలజీ కన్సల్టింగ్',
    service_consulting_desc: 'మార్కెట్ విస్తరణ కోసం వ్యూహాత్మక టెక్నాలజీ మార్గదర్శనం',
    service_integration_title: 'సిస్టమ్ ఇంటిగ్రేషన్',
    service_integration_desc: 'సంక్లిష్ట టెక్నాలజీ సిస్టమ్‌ల సమగ్ర ఏకీకరణ',
    service_market_title: 'మార్కెట్ వంతెన',
    service_market_desc: 'సింగపూర్, జపాన్, మరియు భారత వ్యాపార పర్యావరణ వ్యవస్థలను కలపడం',
    offices_title: 'మా కార్యాలయాలు',
    singapore_office: 'సింగపూర్ కార్యాలయం',
    japan_office: 'జపాన్ కార్యాలయం',
    india_office: 'భారత కార్యాలయం',
    contact_title: 'సంప్రదించండి',
    contact_description: 'AIతో మీ వ్యాపారాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా? ఈరోజే మమ్మల్ని సంప్రదించండి.',
    contact_name: 'పూర్తి పేరు',
    contact_email: 'ఇమెయిల్ చిరునామా',
    contact_message: 'సందేశం',
    contact_send: 'సందేశం పంపండి',
    cta_view_all_services: 'అన్ని సేవలను చూడండి',
    footer_rights: 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
  },
  sg: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_offices: 'Offices',
    nav_careers: 'Careers',
    nav_contact: 'Contact',
    hero_title: 'Transforming Business Through Innovation',
    hero_subtitle: 'Leading Technology Solutions Across Asia-Pacific',
    hero_description: 'Connecting Singapore, Japan, and India markets with cutting-edge AI solutions and expert technology consulting services.',
    hero_cta: 'Explore Our Services',
    about_title: 'About Our Company',
    about_description: 'We are a premier technology consulting firm with offices in Singapore, Japan, and India, specialising in AI-driven solutions that transform businesses across Asia-Pacific.',
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive technology solutions designed to transform your business across Asia-Pacific markets',
    service_ai_title: 'AI Solutions',
    service_ai_desc: 'Advanced artificial intelligence implementation for business transformation',
    service_software_title: 'Software Development',
    service_software_desc: 'Custom software solutions and application development services',
    service_recruitment_title: 'Recruitment Services',
    service_recruitment_desc: 'Expert IT recruitment and talent acquisition across Asia-Pacific',
    service_consulting_title: 'Technology Consulting',
    service_consulting_desc: 'Strategic technology guidance for market expansion',
    service_integration_title: 'System Integration',
    service_integration_desc: 'Seamless integration of complex technology systems',
    service_market_title: 'Market Bridge',
    service_market_desc: 'Connecting Singapore, Japan, and India business ecosystems',
    offices_title: 'Our Offices',
    singapore_office: 'Singapore Office',
    japan_office: 'Japan Office',
    india_office: 'India Office',
    contact_title: 'Get In Touch',
    contact_description: 'Ready to transform your business with AI? Contact us today.',
    contact_name: 'Full Name',
    contact_email: 'Email Address',
    contact_message: 'Message',
    contact_send: 'Send Message',
    cta_view_all_services: 'View All Services',
    footer_rights: 'All rights reserved.',
  },
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  translate: (key: string) => string;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
  };

  const translate = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      languages,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};