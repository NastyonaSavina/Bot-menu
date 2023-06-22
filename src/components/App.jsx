import React, { lazy , Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';





export const App = () => {
  

  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
  
  
};


