export const classList = [
  'baufilead_beste_kondition_sollzins',
  'baufilead_beste_kondition_effektivzins',
  'baufilead_beste_kondition_zinsbindung',
  'baufilead_beste_kondition_monatliche_rate',
  'baufilead_beste_kondition_restschuld',
  'baufilead_beste_kondition_nettodarlehensbetrag',
  'baufilead_beste_kondition_immobilienkosten',
  'baufilead_beste_kondition_summe_zahlungen',
  'baufilead_beste_kondition_grundbuchkosten',
  'baufilead_beste_kondition_ratenanzahl',
  'baufilead_beste_kondition_rueckzahlungslaufzeit',
  'baufilead_beste_kondition_datum',
];

export const applyInnerHTML = () => {
  classList.forEach((className) => {
    const elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
      const element = elements[0];
      const id = className.replace('baufilead_beste_kondition_', '');
      const targets = document.querySelectorAll(`#${id}`);
      if (targets.length > 0) {
        targets.forEach((target) => {
          target.innerHTML = element.innerHTML;
        });
      }
    }
  });
};
