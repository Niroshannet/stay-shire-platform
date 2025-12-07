'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, MoreVertical, Phone, Video } from 'lucide-react';
import { Input } from '@/components/ui/Input';

const CONVERSATIONS = [
    {
        id: '1',
        user: 'Sarah Anderson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        lastMessage: 'Great, I will send you the check-in details.',
        time: '10:30 AM',
        unread: 2,
        online: true,
    },
    {
        id: '2',
        user: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
        lastMessage: 'Is the pool heated?',
        time: 'Yesterday',
        unread: 0,
        online: false,
    }
];

const MESSAGES = [
    { id: 1, text: 'Hi Sarah, I love your villa!', sender: 'me', time: '10:00 AM' },
    { id: 2, text: 'Hello! Thank you so much. We would love to host you.', sender: 'them', time: '10:05 AM' },
    { id: 3, text: 'Is early check-in available?', sender: 'me', time: '10:15 AM' },
    { id: 4, text: 'Yes, we can arrange that for you.', sender: 'them', time: '10:20 AM' },
    { id: 5, text: 'Great, I will send you the check-in details.', sender: 'them', time: '10:30 AM' },
];

export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState(CONVERSATIONS[0]);
    const [message, setMessage] = useState('');

    return (
        <div className="min-h-screen bg-slate-900 pt-20 flex">
            <div className="max-w-7xl mx-auto w-full flex h-[calc(100vh-80px)] p-4 gap-6">

                {/* Sidebar - Conversations */}
                <div className="w-full md:w-96 glass rounded-3xl flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-white/10">
                        <h1 className="text-2xl font-bold text-white mb-4">Messages</h1>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search messages"
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:bg-white/10 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {CONVERSATIONS.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => setSelectedChat(chat)}
                                className={`p-4 rounded-2xl cursor-pointer transition-colors flex gap-4 ${selectedChat?.id === chat.id ? 'bg-indigo-600' : 'hover:bg-white/5'
                                    }`}
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src={chat.avatar} alt={chat.user} className="w-full h-full object-cover" />
                                    </div>
                                    {chat.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-white">{chat.user}</h3>
                                        <span className="text-xs text-slate-300">{chat.time}</span>
                                    </div>
                                    <p className="text-sm text-slate-300 truncate">{chat.lastMessage}</p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                            {chat.unread}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Window */}
                <div className="hidden md:flex flex-1 glass rounded-3xl flex-col overflow-hidden">
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img src={selectedChat.avatar} alt={selectedChat.user} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">{selectedChat.user}</h3>
                                <span className="text-sm text-green-400">Online now</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-slate-400">
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Phone className="w-5 h-5" /></button>
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Video className="w-5 h-5" /></button>
                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><MoreVertical className="w-5 h-5" /></button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {MESSAGES.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[70%] p-4 rounded-2xl ${msg.sender === 'me'
                                        ? 'bg-indigo-600 text-white rounded-br-none'
                                        : 'bg-white/10 text-white rounded-bl-none'
                                        }`}
                                >
                                    <p>{msg.text}</p>
                                    <div className={`text-xs mt-2 ${msg.sender === 'me' ? 'text-indigo-200' : 'text-slate-400'}`}>
                                        {msg.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white/5 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                onKeyDown={(e) => e.key === 'Enter' && setMessage('')}
                            />
                            <button
                                onClick={() => setMessage('')}
                                className="bg-indigo-600 p-3 rounded-full text-white hover:bg-indigo-700 transition-colors shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
