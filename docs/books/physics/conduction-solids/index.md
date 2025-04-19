---
title: Physics Book - Conduction of Electricity in Solids for JEE & NEET
description: Learn electrical conduction in solids for JEE and NEET, covering conductors, semiconductors, insulators, band theory, conductivity, and semiconductor devices, with practice MCQs.
slug: book/physics/conduction-solids
keywords: physics conduction in solids, JEE physics band theory, NEET physics semiconductors, solid-state physics
og:image: https://vidyamarg.com/og-physics-conduction-solids.jpg
---

# Chapter 41: Conduction of Electricity in Solids

Electrical conduction in solids underpins modern electronics, from conductors powering circuits to semiconductors driving computers. This chapter explores conductors, semiconductors, and insulators, band theory of solids, electrical conductivity and resistivity, and semiconductor devices and their applications. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on resistivity, bandgap, and diode characteristics. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master solid-state physics in competitive exams, ensuring precision and conceptual clarity.

## 41.1 Conductors, Semiconductors, and Insulators

Materials are classified by their ability to conduct electricity: **conductors** (e.g., metals) have high conductivity due to free electrons, **insulators** (e.g., rubber) have low conductivity due to tightly bound electrons, and **semiconductors** (e.g., silicon) have intermediate conductivity, tunable by doping or temperature. Conductivity depends on electron availability and mobility. JEE/NEET problems involve identifying material types or comparing conductivities. *Fundamentals of Physics* emphasizes electron behavior in different materials.

**Solved Example**: A JEE Main problem asks the conductivity order of copper (conductor), silicon (semiconductor), and glass (insulator).
- **Solution**: Conductors have high conductivity, semiconductors have moderate, and insulators have low. Order: **Copper > Silicon > Glass**. Option (a) “Copper > Silicon > Glass” is correct. This is a standard JEE material classification problem.
  - **JEE Tip**: Compare electron mobility; conductors have free electrons. Common error: Confusing semiconductor and insulator.

**Solved Example**: A NEET problem asks why semiconductors conduct better at higher temperatures.
- **Solution**: Higher temperatures **increase electron-hole pairs** in semiconductors, enhancing conductivity. Option (a) “More electron-hole pairs” is correct. This is a typical NEET semiconductor problem.
  - **NEET Tip**: Relate to thermal excitation; distinguish from conductors. Common error: Assuming insulator behavior.

## 41.2 Band Theory of Solids

**Band theory** explains conduction via energy bands: the **valence band** (filled with electrons), **conduction band** (empty or partially filled), and **bandgap** (energy difference, \( E_g \)). Conductors have overlapping bands (\( E_g \approx 0 \)), insulators have large bandgaps (\( E_g > 5 \, \text{eV} \)), and semiconductors have small bandgaps (\( E_g \approx 1 \, \text{eV} \)). JEE/NEET problems involve calculating bandgap or classifying materials. *University Physics* connects band theory to electronic properties.

**Solved Example**: A JEE Advanced problem involves a semiconductor with a bandgap of 1.1 eV. Calculate the wavelength of a photon needed to excite an electron across the bandgap (\( h = 4.136 \times 10^{-15} \, \text{eV·s} \), \( c = 3.00 \times 10^8 \, \text{m/s} \)).
- **Solution**: Photon energy: \( E = E_g = 1.1 \, \text{eV} \). Wavelength: \( \lambda = \frac{hc}{E} = \frac{4.136 \times 10^{-15} \times 3.00 \times 10^8}{1.1} \approx 1.127 \times 10^{-6} \, \text{m} = 1127 \, \text{nm} \approx 1130 \, \text{nm} \) (3 significant figures, April 14, 2025). This is a classic JEE band theory problem.
  - **JEE Tip**: Use \( E = \frac{hc}{\lambda} \); convert to nm. Common error: Incorrect energy units.

**Solved Example**: A NEET problem asks the bandgap characteristic of insulators.
- **Solution**: Insulators have a **large bandgap** (\( E_g > 5 \, \text{eV} \)), preventing electron conduction. Option (a) “Large bandgap” is correct. This is a typical NEET band theory problem.
  - **NEET Tip**: Large bandgap means no conduction; compare with semiconductors. Common error: Assuming zero bandgap.

## 41.3 Electrical Conductivity and Resistivity

**Electrical conductivity** (\( \sigma \)) measures a material’s ability to conduct current, related to **resistivity** (\( \rho \)) by \( \sigma = \frac{1}{\rho} \). Resistivity is given by \( \rho = \frac{m}{n e^2 \tau} \), where \( m \) is electron mass, \( n \) is electron density, \( e \) is electron charge, and \( \tau \) is the mean free time. For conductors, \( \rho \) is low; for semiconductors, \( \rho \) decreases with temperature. JEE/NEET problems involve calculating \( \rho \), \( \sigma \), or temperature effects. *Fundamentals of Physics* emphasizes microscopic conduction mechanisms.

**Solved Example**: A JEE Main problem involves a copper wire with electron density \( n = 8.5 \times 10^{28} \, \text{m}^{-3} \), \( \tau = 2.0 \times 10^{-14} \, \text{s} \). Calculate its resistivity (\( m_e = 9.11 \times 10^{-31} \, \text{kg} \), \( e = 1.602 \times 10^{-19} \, \text{C} \)).
- **Solution**: Resistivity: \( \rho = \frac{m}{n e^2 \tau} \). Given values: \( \rho = \frac{9.11 \times 10^{-31}}{8.5 \times 10^{28} \times (1.602 \times 10^{-19})^2 \times 2.0 \times 10^{-14}} \). Compute: \( e^2 = (1.602 \times 10^{-19})^2 \approx 2.566 \times 10^{-38} \, \text{C}^2 \), denominator: \( 8.5 \times 10^{28} \times 2.566 \times 10^{-38} \times 2.0 \times 10^{-14} \approx 4.362 \times 10^{-23} \). Thus, \( \rho \approx \frac{9.11 \times 10^{-31}}{4.362 \times 10^{-23}} \approx 2.088 \times 10^{-8} \, \Omega \cdot \text{m} \approx 2.09 \times 10^{-8} \, \Omega \cdot \text{m} \). This is a standard JEE resistivity problem.
  - **JEE Tip**: Ensure SI units; compute denominator carefully. Common error: Incorrect \( e^2 \).

**Solved Example**: A NEET problem asks why conductor resistivity increases with temperature.
- **Solution**: Higher temperatures **increase lattice vibrations**, reducing \( \tau \) and increasing \( \rho \). Option (a) “Increased vibrations” is correct. This is a typical NEET resistivity problem.
  - **NEET Tip**: Relate to electron scattering; contrast with semiconductors. Common error: Assuming semiconductor behavior.

## 41.4 Semiconductor Devices and Applications

**Semiconductor devices** like diodes and transistors rely on doped semiconductors (n-type, p-type). A **p-n junction** diode conducts in forward bias and blocks in reverse bias. **Transistors** amplify signals or act as switches. Applications include LEDs, solar cells, and integrated circuits. JEE/NEET problems involve diode behavior or doping effects. *University Physics* connects devices to modern electronics.

**Solved Example**: A JEE Advanced problem involves a silicon diode with a forward bias threshold of 0.7 V. Calculate the minimum voltage for conduction.
- **Solution**: A silicon diode conducts when the applied voltage exceeds the **threshold voltage**, 0.7 V. Minimum voltage: **0.7 V**. Option (a) “0.7 V” is correct. This is a classic JEE diode problem.
  - **JEE Tip**: Use standard threshold (0.7 V for silicon); check bias direction. Common error: Confusing with germanium (0.3 V).

**Solved Example**: A NEET problem asks the function of a p-n junction diode.
- **Solution**: A p-n junction diode **allows current in one direction**, acting as a rectifier. Option (a) “Rectifier” is correct. This is a typical NEET semiconductor device problem.
  - **NEET Tip**: Focus on one-way conduction; relate to diodes. Common error: Confusing with transistors.

## Review & Summary
- **Material Types**: Conductors (high \( \sigma \)), semiconductors (tunable \( \sigma \)), insulators (low \( \sigma \)).
- **Band Theory**: Conductors (no bandgap), semiconductors (\( E_g \approx 1 \, \text{eV} \)), insulators (\( E_g > 5 \, \text{eV} \)).
- **Conductivity**: \( \sigma = \frac{1}{\rho} \); \( \rho = \frac{m}{n e^2 \tau} \).
- **Semiconductor Devices**: Diodes (rectify), transistors (amplify/switch).

## Quick Revision Section
- **Key Equations**:
  - Resistivity: \( \rho = \frac{m}{n e^2 \tau} \)
  - Conductivity: \( \sigma = \frac{1}{\rho} \)
  - Photon wavelength: \( \lambda = \frac{hc}{E_g} \)
- **SI Units**: Resistivity (\( \Omega \cdot \text{m} \)), conductivity (\( \text{S/m} \)), energy (eV).
- **JEE/NEET Tips**: Use \( e = 1.602 \times 10^{-19} \, \text{C} \), verify significant figures (April 14, 2025), sketch band diagrams, distinguish doping types.
- **Applications**: LEDs, solar cells, integrated circuits.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of conduction in solids, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/conduction-solids/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make conduction in solids engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing band structures and semiconductor devices coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*