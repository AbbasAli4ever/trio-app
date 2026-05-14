import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useResponsive } from '@/hooks';
import { useTrayStore } from '@/store';
import { SPECIAL_DAYS } from '@/constants/homeData';
import { SpecialDayModal, ANNIVERSARY_MODAL, BIRTHDAY_MODAL, DATE_NIGHT_MODAL, BRIDAL_SHOWER_MODAL, FRIENDS_DATE_MODAL, SMALL_EVENT_MODAL } from './SpecialDayModal';
import { SmallEventStep1Modal, PACKAGE_OPTIONS, DECOR_ADD_ONS } from './SmallEventStep1Modal';
import { SmallEventStep2Modal, CAKE_OPTIONS } from './SmallEventStep2Modal';
import { SmallEventStep3Modal, CINEMA_PRICE_PER_SEAT } from './SmallEventStep3Modal';
import { SmallEventStep4Modal, EXTRAS_ADD_ONS } from './SmallEventStep4Modal';
import { SmallEventStep5Modal } from './SmallEventStep5Modal';

type ModalConfig = typeof ANNIVERSARY_MODAL;
type PackageStep = 'intro' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5';

const PACKAGE_META: Record<string, { title: string; image: any }> = {
  birthday: { title: 'Birthday Package', image: require('@/public/home/birthday.png') },
  anniversary: { title: 'Anniversary Package', image: require('@/public/home/aniversary.png') },
  'date-night': { title: 'Date Night Package', image: require('@/public/home/datenight.png') },
  'bridal-shower': { title: 'Bridal Shower Package', image: require('@/public/home/shower.png') },
  'friends-date': { title: 'Friends Date Package', image: require('@/public/home/FriendsDate.png') },
  'small-event': { title: 'Small Event Package', image: require('@/public/home/SmallEvent.png') },
};

function computeTotal(
  selectedPackageIdx: number,
  selectedDecorAddOns: string[],
  selectedCakeId: string | null,
  addCinema: boolean,
  ticketCount: number,
  selectedExtras: string[],
) {
  let total = PACKAGE_OPTIONS[selectedPackageIdx]?.price ?? 0;

  for (const id of selectedDecorAddOns) {
    total += DECOR_ADD_ONS.find((a) => a.id === id)?.price ?? 0;
  }

  if (selectedCakeId) {
    total += CAKE_OPTIONS.find((c) => c.id === selectedCakeId)?.price ?? 0;
  }

  if (addCinema && ticketCount > 0) {
    total += CINEMA_PRICE_PER_SEAT * ticketCount;
  }

  for (const id of selectedExtras) {
    total += EXTRAS_ADD_ONS.find((e) => e.id === id)?.price ?? 0;
  }

  return total;
}

export function SpecialDaysSection() {
  const { isTablet, width, t } = useResponsive();
  const addItem = useTrayStore((s) => s.addItem);
  const cols = isTablet ? 6 : 3;
  const gap = t(12, 8);
  const cardWidth = (width - (isTablet ? t(48, 32) : 32) - gap * (cols - 1)) / cols;
  const cardHeight = t(102, 82);

  const [activeModal, setActiveModal] = useState<ModalConfig | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [packageStep, setPackageStep] = useState<PackageStep | null>(null);

  // Step 1
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedPackageIdx, setSelectedPackageIdx] = useState(0);
  const [selectedDecorAddOns, setSelectedDecorAddOns] = useState<string[]>([]);
  // Step 2
  const [selectedCakeId, setSelectedCakeId] = useState<string | null>(null);
  // Step 3
  const [addCinema, setAddCinema] = useState(true);
  const [ticketCount, setTicketCount] = useState(1);
  // Step 4
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const runningTotal = computeTotal(selectedPackageIdx, selectedDecorAddOns, selectedCakeId, addCinema, ticketCount, selectedExtras);

  const currentMeta = activeCardId ? PACKAGE_META[activeCardId] : PACKAGE_META['small-event'];

  function handleCardPress(id: string) {
    setActiveCardId(id);
    // Reset selections for a fresh flow
    setPeopleCount(1);
    setSelectedPackageIdx(0);
    setSelectedDecorAddOns([]);
    setSelectedCakeId(null);
    setAddCinema(true);
    setTicketCount(1);
    setSelectedExtras([]);

    if (id === 'birthday') setActiveModal({ ...BIRTHDAY_MODAL, onCtaPress: () => { setActiveModal(null); setPackageStep('step1'); } });
    else if (id === 'anniversary') setActiveModal({ ...ANNIVERSARY_MODAL, onCtaPress: () => { setActiveModal(null); setPackageStep('step1'); } });
    else if (id === 'date-night') setActiveModal({ ...DATE_NIGHT_MODAL, onCtaPress: () => { setActiveModal(null); setPackageStep('step1'); } });
    else if (id === 'bridal-shower') setActiveModal({ ...BRIDAL_SHOWER_MODAL, onCtaPress: () => { setActiveModal(null); setPackageStep('step1'); } });
    else if (id === 'friends-date') setActiveModal({ ...FRIENDS_DATE_MODAL, onCtaPress: () => { setActiveModal(null); setPackageStep('step1'); } });
    else if (id === 'small-event') setPackageStep('intro');
  }

  function closeAll() {
    setActiveModal(null);
    setPackageStep(null);
    setActiveCardId(null);
  }

  return (
    <View style={{ gap: t(16, 12) }}>
      <View style={{ gap: 4 }}>
        <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(10, 9), letterSpacing: t(4, 3), color: '#775596' }}>
          SPECIAL DAY?
        </Text>
        <Text style={{ fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: t(24, 18), color: '#1e0736' }}>
          Tell Us & We'll Make It Magical
        </Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {SPECIAL_DAYS.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => handleCardPress(item.id)}
            style={{
              width: cardWidth,
              height: cardHeight,
              backgroundColor: '#ffffff',
              borderRadius: t(14, 12),
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              gap: t(6, 4),
              paddingHorizontal: t(10, 6),
              paddingVertical: t(14, 10),
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Image source={item.image} style={{ width: t(44, 32), height: t(40, 30) }} resizeMode="contain" />
            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: t(11, 9), color: '#370c64', textAlign: 'center' }}>
              {item.title}
            </Text>
            <View
              style={{
                position: 'absolute',
                bottom: -8,
                left: '5%',
                right: '5%',
                height: t(8, 6),
                borderRadius: 80,
                backgroundColor: '#a274fc',
                opacity: 0.75,
                shadowColor: '#a274fc',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 20,
                elevation: 20,
                marginTop: -2,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Intro modal for all cards */}
      {activeModal && (
        <SpecialDayModal visible={!!activeModal} onClose={closeAll} config={activeModal} />
      )}

      {/* Small Event intro modal */}
      <SpecialDayModal
        visible={packageStep === 'intro'}
        onClose={closeAll}
        config={{
          image: SMALL_EVENT_MODAL.image,
          title: SMALL_EVENT_MODAL.title,
          description: SMALL_EVENT_MODAL.description,
          quickActions: SMALL_EVENT_MODAL.quickActions,
          ctaLabel: 'Build the Full Package.',
          onCtaPress: () => setPackageStep('step1'),
        }}
      />

      {/* Step 1 — Decor + add-ons */}
      <SmallEventStep1Modal
        visible={packageStep === 'step1'}
        onClose={closeAll}
        onNext={() => setPackageStep('step2')}
        packageTitle={currentMeta.title}
        packageImage={currentMeta.image}
        peopleCount={peopleCount}
        onPeopleCountChange={setPeopleCount}
        selectedPackageIdx={selectedPackageIdx}
        onPackageChange={setSelectedPackageIdx}
        selectedDecorAddOns={selectedDecorAddOns}
        onDecorAddOnsChange={setSelectedDecorAddOns}
        runningTotal={runningTotal}
      />

      {/* Step 2 — Cake */}
      <SmallEventStep2Modal
        visible={packageStep === 'step2'}
        onClose={closeAll}
        onBack={() => setPackageStep('step1')}
        onNext={() => setPackageStep('step3')}
        packageTitle={currentMeta.title}
        packageImage={currentMeta.image}
        selectedCakeId={selectedCakeId}
        onCakeChange={setSelectedCakeId}
        runningTotal={runningTotal}
      />

      {/* Step 3 — Cinema */}
      <SmallEventStep3Modal
        visible={packageStep === 'step3'}
        onClose={closeAll}
        onBack={() => setPackageStep('step2')}
        onNext={() => setPackageStep('step4')}
        packageTitle={currentMeta.title}
        packageImage={currentMeta.image}
        addCinema={addCinema}
        onAddCinemaChange={setAddCinema}
        ticketCount={ticketCount}
        onTicketCountChange={setTicketCount}
        runningTotal={runningTotal}
      />

      {/* Step 4 — Extras */}
      <SmallEventStep4Modal
        visible={packageStep === 'step4'}
        onClose={closeAll}
        onBack={() => setPackageStep('step3')}
        onNext={() => setPackageStep('step5')}
        packageTitle={currentMeta.title}
        packageImage={currentMeta.image}
        selectedExtras={selectedExtras}
        onExtrasChange={setSelectedExtras}
        runningTotal={runningTotal}
      />

      {/* Step 5 — Review & Add to Tray */}
      <SmallEventStep5Modal
        visible={packageStep === 'step5'}
        onClose={closeAll}
        onBack={() => setPackageStep('step4')}
        onAddToTray={() => {
          addItem({
            id: `event-${activeCardId ?? 'small-event'}`,
            name: currentMeta.title,
            price: `Rs ${runningTotal.toLocaleString('en-PK')}`,
            image: currentMeta.image,
            category: 'event',
          });
          closeAll();
        }}
        packageTitle={currentMeta.title}
        packageImage={currentMeta.image}
        peopleCount={peopleCount}
        selectedPackageIdx={selectedPackageIdx}
        selectedDecorAddOns={selectedDecorAddOns}
        selectedCakeId={selectedCakeId}
        addCinema={addCinema}
        ticketCount={ticketCount}
        selectedExtras={selectedExtras}
        total={runningTotal}
      />
    </View>
  );
}
