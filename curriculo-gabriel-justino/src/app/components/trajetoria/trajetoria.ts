import { Component, signal } from '@angular/core';
import { Marco } from '../../models/marco';

@Component({
  imports: [],
  selector: 'app-trajetoria',
  styleUrl: './trajetoria.scss',
  templateUrl: './trajetoria.html',
})
export class Trajetoria {
  // signal() por consistência com o restante do projeto (decisão da Fase 3.1).
  // Ordem: do mais recente para o mais antigo.
  protected readonly marcos = signal<Marco[]>([
    {
      titulo: 'NASA Space Apps Challenge',
      periodo: '2026',
      descricao: 'Primeira participação: equipe desenvolvendo um jogo de simulação de missão espacial.',
      tipo: 'evento',
      situacao: 'Em preparação',
      destaque: true,
    },
    {
      titulo: 'CMMS',
      periodo: '2026',
      descricao: 'Sistema de gestão de manutenção de ativos e veículos.',
      tipo: 'projeto',
      situacao: 'Em desenvolvimento',
      tecnologias: ['React Native', 'Python'],
    },
    {
      titulo: 'CNP Compras',
      periodo: '2026',
      descricao: 'Sistema de controle e acompanhamento de pedidos de compra.',
      tipo: 'projeto',
      situacao: 'Em produção',
      tecnologias: ['Python', 'HTML'],
    },
    {
      titulo: 'Análise e Desenvolvimento de Sistemas · UniAteneu',
      periodo: '2026 – 2029',
      descricao: 'Graduação tecnológica em andamento.',
      tipo: 'formacao',
      situacao: 'Cursando',
    },
  ]);
}
