import { jsPDF } from "jspdf";

import template1 from "./template1";

export const createTemplate = (type, info) => {
  const templateList = {
    template1,
  }

  const executeTemplate = templateList[type] || null;

  if (!executeTemplate) return null;

  const doc = new jsPDF();
  const maxLineWidth = 170;
  const maxYPos = 275;

  return executeTemplate(doc, info, { maxLineWidth, maxYPos })
}