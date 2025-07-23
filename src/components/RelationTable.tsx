import React, { useState } from 'react'
import { RelationUser } from '../types/User';

interface Props {
    rootUser: RelationUser; // Relasi level 1
}

const RelationTable: React.FC<Props> = ({ rootUser }) => {
    const [expanded, setExpanded] = useState(false);

    const buildLevelRows = (user: RelationUser, level: number = 1): any[] => {
        if (level > 6 || !user) return [];
        const current = [{
            userId: user.userId,
            name: user.name,
            email: user.email,
            level
        }];
        const children = (user.children || []).flatMap(child => buildLevelRows(child, level + 1));
        return [...current, ...children];
    };

    const rows = buildLevelRows(rootUser);

    return (
        <div className="mb-6 border rounded-lg shadow overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 text-left">Level</th>
                        <th className="p-2 text-left">Nama</th>
                        <th className="p-2 text-left">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {rows
                        .filter(row => expanded || row.level === 1)
                        .map((row, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-2">Level {row.level}</td>
                                <td className="p-2">{row.name}</td>
                                <td className="p-2">{row.email}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="p-2">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-sm text-blue-600 hover:underline"
                >
                    {expanded ? 'Tutup' : 'Lihat lainnya'}
                </button>
            </div>
        </div>
    );
};

export default RelationTable;
